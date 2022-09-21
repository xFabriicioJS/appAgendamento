import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirma-agendamento',
  templateUrl: './confirma-agendamento.page.html',
  styleUrls: ['./confirma-agendamento.page.scss'],
})
export class ConfirmaAgendamentoPage implements OnInit {

  nome: string;
  consulta: string;


  constructor(
    private actRoute: ActivatedRoute,
    private toastController: ToastController

  ) {
    this.presentToast();
   }



  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.nome = data.nome;
      this.consulta = data.consulta;
    });
 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Consulta confirmada!',
      duration: 1500,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();
  }

}
