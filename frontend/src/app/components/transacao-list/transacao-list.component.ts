import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TransacaoService } from '../../services/transacao.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacao-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  templateUrl: './transacao-list.component.html',
  styleUrls: ['./transacao-list.component.scss']
})
export class TransacaoListComponent implements OnInit {
  transacoes: any[] = [];
  transacoesFiltradas: any[] = [];
  filtroTipo: string = '';
  displayedColumns: string[] = ['descricao', 'valor', 'tipo', 'categoria', 'acoes'];

  constructor(
    private transacaoService: TransacaoService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.carregarTransacoes();
  }

  carregarTransacoes() {
    this.transacaoService.getTransacoes().subscribe({
      next: (data) => {
        this.transacoes = data;
        this.transacoesFiltradas = [...this.transacoes];
      },
      error: () => {
        this.snackBar.open('Erro ao carregar transações.', 'Fechar', {
          duration: 3000,
        });
      }
    });
  }

  filtrarTransacoes() {
    if (this.filtroTipo) {
      this.transacoesFiltradas = this.transacoes.filter(
        (t) => t.tipo === this.filtroTipo
      );
    } else {
      this.transacoesFiltradas = [...this.transacoes];
    }
  }

  editarTransacao(transacao: any) {
    this.router.navigate(['/nova-transacao', transacao.id]);
  }

  deletarTransacao(id: number) {
    if (confirm('Tem certeza que deseja excluir esta transação?')) {
      this.transacaoService.deleteTransacao(id).subscribe({
        next: () => {
          this.snackBar.open('Transação excluída com sucesso!', 'Fechar', {
            duration: 3000,
          });
          this.carregarTransacoes();
        },
        error: () => {
          this.snackBar.open('Erro ao excluir a transação.', 'Fechar', {
            duration: 3000,
          });
        }
      });
    }
  }
}
