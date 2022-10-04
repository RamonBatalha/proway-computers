# Lojavirtual

## Componente Header

É o componente relacionado ao cabeçalho

## Componente Footer

É o componente relacioado ao footer

## modulo produtos

Criamos um modulo produtos e adicionamos um lazy-loading nas rotas para tornar o carregamento mais rápido

utilizamos o comando

> ng g module modulos/produtos --route produtos --module app.module

o route adicionando a rota como path "produtos" e vinculamos ao app.module

no router também setamos para a página de produto ser a inicial

```javascript
 const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./modulos/produtos/produtos.module').then(m => m.ProdutosModule) },
  {path: "", redirectTo: "produtos", pathMatch: "full"},
];
```

### Produtos.ts

o Produto ts é uma class que simulará o backend, nela temos a interface simulando o modelo de dados e uma lista com as informações dos produtos

No componente setamos a variável produto, que receberá o mock de produtos do TS (no caso um array)

``` javascript
export class ProdutosComponent implements OnInit {
  //criando uma variável produtos e setando o valor para o produto la no TS
   produtos: IProduto[] = produtos;

  constructor() { }

  ngOnInit(): void {
  }

}
```

## Detalhes Proutos

É a página de produto individuais, com os seus detalhes

> ng g c modulos/produtos/detalhes-produtos --module produtos.module

aqui criamos um componente para isso e atrelamos esse componente ao produtos.module

``` javascript
@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }

```
note que dentro da declarations ele já fica atrelado

Setamos algumas rotas no próprio módulo criado e criamos um serviço para simular uma requisição ao backend

### Serviço Produto

Simula requisição ao backend

~~~javascript
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
   produtos: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id = produtoId);
  }
}

~~~

Agora importamos os métodos do serviço tanto no produto.ts (metodo get All) como no detalhe-produto (get one)

Depois utilizamos as propriedades nos arquivos HTML