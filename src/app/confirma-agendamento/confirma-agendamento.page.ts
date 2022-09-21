import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirma-agendamento',
  templateUrl: './confirma-agendamento.page.html',
  styleUrls: ['./confirma-agendamento.page.scss'],
})
export class ConfirmaAgendamentoPage implements OnInit {

  nome: string;
  idMedico: number;
  nomeMedico: string;
  especialidade: string;
  data : string;


  constructor(
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private router: Router

  ) {
    this.presentToast();
    

   }



  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.nome = data.nome;
      this.idMedico = data.idMedico;
      this.especialidade = data.especialidade;
      this.data = data.data;
      console.log(this.nome, this.idMedico, this.especialidade, this.data);
      this.buscaMedicoPorId(this.idMedico);
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

  buscaMedicoPorId(id){
    let medicos = localStorage.getItem('medicosDb');
    if(medicos){
      let medicosParse = JSON.parse(medicos);
      let medico = medicosParse.find((medico:any)=>medico.id == id);
      this.nomeMedico = medico.nome;

      console.log(this.nomeMedico);
    }
    
  }

  navigateInicio(){
    this.router.navigate(['/home']);
  }


}
