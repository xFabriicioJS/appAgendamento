import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'consultas/:id',
    loadChildren: () => import('./consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'confirma-agendamento/:nome/:idMedico/:data/:especialidade/:motivo',
    loadChildren: () => import('./confirma-agendamento/confirma-agendamento.module').then( m => m.ConfirmaAgendamentoPageModule)
  },
  {
    path: 'visualizar-consultas/:id',
    loadChildren: () => import('./visualizar-consultas/visualizar-consultas.module').then( m => m.VisualizarConsultasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
