import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProdutoCarrinho } from 'src/app/modulos/produtos/produtos';
import { CarrinhoService } from 'src/app/serviços/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(public carrinhoService: CarrinhoService, private router: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal()
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal()
  }
  
  //Estamos percorrendo todos os itens, multiplicando o preço pela quantidade e somando o valor anterior encontrado, ou seja, calculando o total. o 0 é um valor default
  //precisa adicionar no ngoninit e também no método de remoção, pois quando removemos, temos que calcular o valor novamente
  calcularTotal() {
     this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.quantidade * curr.preco), 0)
  }
   
  //método que exibe um alert de compra e limpa o carrinho
  comprar(){
    alert("Parabéns, você realizou sua compra!")
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])

  }

}
