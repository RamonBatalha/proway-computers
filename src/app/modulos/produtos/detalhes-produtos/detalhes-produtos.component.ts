import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/serviços/carrinho.service';
import { NotificacaoService } from 'src/app/serviços/notificacao.service';
import { ProdutosService } from 'src/app/serviços/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent implements OnInit {
   
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(private produtoService: ProdutosService, private route:ActivatedRoute, private notificacaoService: NotificacaoService, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    //captando o id da url
    const routeParams = this.route.snapshot.paramMap;
    //transformando em Number
    const produtoId = Number(routeParams.get("id"));
    console.log(produtoId)
    //utilizando o método getone(getbyid)
    this.produto = this.produtoService.getOne(produtoId);
  }
   
  //estamos utilizando o snackbad para exibir a notificação de carrinho adicionado e o método de adição ao carrinho
  adicionarAoCarrinho(){
     this.notificacaoService.notificar("o produto foi adicionado ao carrinho")
  //criamos aqui o produto a ser adicionado com o produto que setamos la em cima + quantidade. esse ! é para dizer que o produto nunca será nulo
     const produto: IProdutoCarrinho = {
      ...this.produto!, quantidade: this.quantidade
     }
     this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
