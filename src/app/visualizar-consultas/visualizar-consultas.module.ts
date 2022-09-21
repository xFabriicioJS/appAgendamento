import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarConsultasPageRoutingModule } from './visualizar-consultas-routing.module';

import { VisualizarConsultasPage } from './visualizar-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarConsultasPageRoutingModule
  ],
  declarations: [VisualizarConsultasPage]
})
export class VisualizarConsultasPageModule {}
