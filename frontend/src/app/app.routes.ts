import { Routes } from '@angular/router';
import { TransacaoListComponent } from './components/transacao-list/transacao-list.component';
import { TransacaoFormComponent } from './components/transacao-form/transacao-form.component';

export const routes: Routes = [
  { path: '', component: TransacaoListComponent },
  { path: 'nova-transacao', component: TransacaoFormComponent },
  { path: 'nova-transacao/:id', component: TransacaoFormComponent },
  { path: '**', redirectTo: '' }
];
