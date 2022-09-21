import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  medicos = [];
  idMedico = 1;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private actionSheetController: ActionSheetController

  ) {
    let medicosDb = localStorage.getItem('medicosDb');
    if(medicosDb){
      this.medicos = JSON.parse(medicosDb);
    }
  }


  navigateAgendamento(id){
    this.router.navigate(['consultas/'+id]);
  }

  async adicionaMedico(){

      const alert = await this.alertCtrl.create({
        header: 'Digite o nome do médico que deseja adicionar',
        inputs: [
          {
            name: 'txtnome',
            type: 'text',
            placeholder: 'Digite o nome do médico'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'light',
            handler: () => {
              console.log('Botão cancelado apertado!');
            }
          }, {
            text: 'Adicionar',
            handler: (form) => {
              console.log(form);
              this.add(form.txtnome);
            }
          }
        ]
      });
  
      await alert.present();
    }
    
    add(nomeMedico){
      
      let medico = {
        id: Math.floor(Math.random()*100),
        nome: nomeMedico,
        disponivel: true,
        img:'https://i.pravatar.cc/150?img='+Math.floor(Math.random() * 70)
      }
      this.medicos.push(medico);
      this.atualizaLocalStorage();
      console.log(this.medicos);
    }

    removeMedico(nomeMedico){
      this.medicos = this.medicos.filter(medico => medico.nome != nomeMedico);
      this.atualizaLocalStorage();
      console.log(nomeMedico);
      console.log(this.medicos);
    }

    atualizaLocalStorage(){
      localStorage.setItem('medicosDb', JSON.stringify(this.medicos));
    }

    async presentActionSheet(medico) {
      const actionSheet = await this.actionSheetController.create({
        header: 'O que deseja fazer?',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Deletar médico',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            this.removeMedico(medico.nome);
          }
        }, {
          text: 'Visualizar consultas',
          icon: 'albums',
          handler: () => {
            this.navigateVisualizarConsultas(medico.id);
          }
        }, {
          text: 'Adicionar consultas',
          icon: 'add-circle',
          data: 'Data value',
          handler: () => {
            this.navigateAgendamento(medico.id);
          }
        },
         {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  
      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
    }

    navigateVisualizarConsultas(id){
      this.router.navigate(['visualizar-consultas/'+id]);
    }
  
    
  }



