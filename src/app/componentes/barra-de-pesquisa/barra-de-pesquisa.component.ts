import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent implements OnInit {
  //linlado com o ngModel do input
  descricao = "";

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
   
  //aqui é uma função ativada com o click da barra de pesquisa, se tiver algo na descrição, vamos navegar até a página de produtos e passar como queryParamans o que digitar no input, ou seja, descrição. Se não tiver nada, apenas navegamos para a página de produtos
  pesquisar(){
     if(this.descricao){
          this.router.navigate(["produtos"], {queryParams:{descricao: this.descricao} })
          return;
     }

     this.router.navigate(["produtos"]);
  }

}
