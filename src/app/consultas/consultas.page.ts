import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  nome: string;
  consultas = [];
  disponivel: boolean;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {

    this.consultas = ['Dermatologista', 'Psiologista', 'Cardiologista', 'Ortopedista', 'Ginecologista', 'Pediatra'];

    this.actRoute.params.subscribe((data:any)=>{
      this.nome = data.nome;
    });
    
  }

  confirmaAgendamento(nome, consulta){
    this.router.navigate(['/confirma-agendamento/'+nome+'/'+consulta]);
  }


  }


