import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarConsultasPage } from './visualizar-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarConsultasPageRoutingModule {}
