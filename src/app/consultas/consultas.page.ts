import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import especialidades from './data';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {


  especialidades = especialidades;
  idMedico : number;
  nome: string;
  data: string;
  motivo:string;
  especialidadeSelecionada: string;
  consultas = [];
 

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router 
  ) { 
    
      let consultasDb = localStorage.getItem('consultasDb');
      if(consultasDb){
        this.consultas = JSON.parse(consultasDb);
      }
  }

  ngOnInit() {


     this.actRoute.params.subscribe((data:any)=>{
       this.idMedico = data.id;
     });
    
  }

  agendaConsulta(){

    let dataFormatada = format(parseISO(this.data), 'dd-MM-yyyy HH:mm');


    try{
    console.log(this.idMedico, this.nome, dataFormatada, this.especialidadeSelecionada);
      let data = {
        idMedico: this.idMedico,
        nome: this.nome,
        data: dataFormatada,
        especialidade: this.especialidadeSelecionada,
        motivo: this.motivo
      }

      this.consultas.push(data);
      //salvando no localstorage
      this.atualizaLocalStorageConsultas();
      
      //redirecionando para a página de confirmação com os dados da consulta
      this.router.navigate(['/confirma-agendamento/'+this.nome+'/'+this.idMedico+'/'+dataFormatada+'/'+this.especialidadeSelecionada+'/'+this.motivo]);
      
    }catch(e){
      console.log('deu ruim');
    }
  }


  verifica()
  {
    console.log(this.idMedico);
  }

  atualizaLocalStorageConsultas(){
    localStorage.setItem('consultasDb', JSON.stringify(this.consultas));
  }
 
  }


