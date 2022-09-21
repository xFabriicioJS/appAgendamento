import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  medicos = [];

  constructor(
    private router: Router,
    private alertCtrl: AlertController

  ) {
    let medicosDb = localStorage.getItem('medicosDb');
    if(medicosDb){
      this.medicos = JSON.parse(medicosDb);
    }
  }


  navigateAgendamento(nome, disponivel){
    this.router.navigate(['consultas/'+nome+'/'+disponivel]);
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
        nome: nomeMedico,
        disponivel: true
      }
      this.medicos.push(medico);
      this.atualizaLocalStorage();
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
    
  }



