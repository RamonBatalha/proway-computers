import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from '../modulos/produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
   itens: IProdutoCarrinho[] = [];

  constructor() { }
   
  //método para obter itens do carrinho. Vamos buscar do localStorage
  // adicionamos ali um array vazio para contornar o problema da string com o Json.parse (parse converte de string para objeto)
  obtemCarrinho() {
     this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }
   
  //método que adiciona item ao carrinho. Recebe um produto do tipo Iprodutocarrinho, adiciona esse produto ao array itens e, depois, adiciona o array ao local storage
  adicionarAoCarrinho(produto: IProdutoCarrinho){
        this.itens.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  
  //método para limpar carrinho. Limpa o array e o local storage
  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

  //método remoção de item individual da lista de carrinhos. Primeiro faz um filtro para deixar apenas os itens com o id diferente do selecionado
  // depois atualizar o local storge com os itens restantes
  removerProdutoCarrinho(produtoId: number){
     this.itens = this.itens.filter(item => item.id !== produtoId)
     localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
