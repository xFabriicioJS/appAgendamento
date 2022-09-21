import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-consultas',
  templateUrl: './visualizar-consultas.page.html',
  styleUrls: ['./visualizar-consultas.page.scss'],
})
export class VisualizarConsultasPage implements OnInit {

  consultas = [];
  idMedico: number;
  imgUrl: string;
  nome: string;
  isModalOpen = false;

  constructor(
    private actRoute : ActivatedRoute,
    private router : Router
  ) {
  
   }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.idMedico = data.id;
    });
    this.carregaInformacoesMedico();
    this.carregarConsultas();


  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  carregarConsultas(){
    let consultasDb = localStorage.getItem('consultasDb');
    if(consultasDb){
      let consultasParse = JSON.parse(consultasDb);
      consultasParse.forEach((consulta:any)=>{
     

       if(consulta.idMedico == this.idMedico){
          this.consultas.push(consulta);
          

        }
      });
    }
  }


  carregaInformacoesMedico(){
    let medicosDb = localStorage.getItem('medicosDb');
    if(medicosDb){
      let medicosParse = JSON.parse(medicosDb);
      medicosParse.forEach((medico:any)=>{
       if(medico.id == this.idMedico){
          this.nome = medico.nome;
          this.imgUrl = medico.img;
        }
      });
    }
  }


  teste(){
    console.log(this.consultas);
  }

  navigateInicio(){
    this.router.navigate(['/home']);
  }

}
