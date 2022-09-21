import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmaAgendamentoPageRoutingModule } from './confirma-agendamento-routing.module';

import { ConfirmaAgendamentoPage } from './confirma-agendamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmaAgendamentoPageRoutingModule
  ],
  declarations: [ConfirmaAgendamentoPage]
})
export class ConfirmaAgendamentoPageModule {}
