import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransacaoService } from '../../services/transacao.service';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import para feedback de erros

@Component({
  selector: 'app-transacao-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './transacao-form.component.html',
  styleUrls: ['./transacao-form.component.scss']
})
export class TransacaoFormComponent implements OnInit {
  transacao: any = {};
  categorias: any[] = [];
  categoriasFiltradas: any[] = [];

  constructor(
    private transacaoService: TransacaoService,
    public router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar // Para exibir notificações de erro
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transacaoService.getTransacao(Number(id)).subscribe((data) => {
        this.transacao = data;
        this.filtrarCategorias();
      });
    }

    this.transacaoService.getCategorias().subscribe((data) => {
      this.categorias = data;
      this.filtrarCategorias();
    });
  }

  filtrarCategorias() {
    this.transacao.categoria_id = null;  // Limpar categoria ao mudar tipo

    if (this.transacao.tipo === 'receita') {
      this.categoriasFiltradas = this.categorias.filter(c =>
        c.nome.toLowerCase().includes('renda') || c.nome.toLowerCase().includes('pagamento') || c.nome.toLowerCase().includes('pro-labore')
      );
    } else if (this.transacao.tipo === 'despesa') {
      this.categoriasFiltradas = this.categorias.filter(c =>
        c.nome.toLowerCase().includes('despesa') || c.nome.toLowerCase().includes('aluguel') || c.nome.toLowerCase().includes('servicos')
      );
    } else {
      this.categoriasFiltradas = [...this.categorias];
    }
  }

  salvarTransacao() {
    if (!this.transacao.categoria_id) {
      this.snackBar.open('Selecione uma categoria!', 'Fechar', { duration: 3000 });
      return;
    }

    if (this.transacao.tipo === 'despesa' && this.transacao.valor > 0) {
      this.transacao.valor = -Math.abs(this.transacao.valor);
    } else if (this.transacao.tipo === 'receita' && this.transacao.valor < 0) {
      this.transacao.valor = Math.abs(this.transacao.valor);
    }

    const request = this.transacao.id
      ? this.transacaoService.updateTransacao(this.transacao.id, this.transacao)
      : this.transacaoService.createTransacao(this.transacao);

    request.subscribe({
      next: () => {
        this.snackBar.open('Transação salva com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao salvar transação:', err);
        this.snackBar.open('Erro ao salvar transação.', 'Fechar', { duration: 3000 });
      }
    });
  }
}
