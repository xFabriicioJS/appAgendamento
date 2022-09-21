import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmaAgendamentoPage } from './confirma-agendamento.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmaAgendamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmaAgendamentoPageRoutingModule {}
