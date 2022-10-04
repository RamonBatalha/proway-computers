import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/serviços/produtos.service';
import { IProduto, produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  //criando uma variável produtos e setando o valor para o produto la no TS
   produtos: IProduto[] | undefined;

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();

    this.route.queryParamMap.subscribe(params => {
      //coletando o query da url
      const descricao = params.get("descricao")?.toLowerCase();
      
      //se existir query, vamos setar o produto para os que possuam correspondência com a descrição do query, se não existir query vai exibir todos os produtos
      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
        return;
      }

      this.produtos = produtos;
    })
     
  }

}
