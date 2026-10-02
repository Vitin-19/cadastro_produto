# Cadastro de Produtos — MVC

## Integrante

Vitor Paiva Nunes de Paula — 20240116

## Como executar

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o sistema:

```bash
npm start
```

4. Acesse a aplicação no navegador em:

```text
http://localhost:3000
```

> O projeto utiliza Express + EJS + Sequelize + SQLite. A base de dados é criada automaticamente ao iniciar a aplicação.

## Funcionalidades

- Cadastro de produtos
- Listagem de produtos
- Edição de produtos
- Exclusão de produtos
- Cadastro de categorias
- Produtos por categoria
- Filtro de produtos por categoria
- Persistência em banco SQLite

## Estrutura do projeto

- `app.js` — configuração principal do Express e definição das rotas
- `bin/www` — inicialização do servidor HTTP e sincronização do banco
- `package.json` — arquivos de configuração e dependências do projeto
- `models/index.js` — definição dos Models `Produto` e `Categoria` com Sequelize
- `routes/produtos.js` — rotas de CRUD de produtos
- `routes/categorias.js` — rota para cadastro de categorias
- `routes/index.js` — rota inicial da aplicação
- `views/produtos/index.ejs` — listagem dos produtos e filtro por categoria
- `views/produtos/novo.ejs` — formulário para cadastro de produto
- `views/produtos/editar.ejs` — formulário para edição de produto
- `README.md` — documentação do projeto

## Código-fonte e arquivos principais

### `package.json`

Arquivo responsável por definir o nome do projeto, scripts e dependências necessárias para execução.

### Models

No arquivo `models/index.js`, o sistema define:

- `Produto`
  - nome
  - preço
  - quantidade
  - categoriaId
- `Categoria`
  - nome

Além disso, há o relacionamento entre categorias e produtos, permitindo acessar a categoria relacionada a cada produto.

### Rotas

A lógica de navegação está na pasta `routes`:

- `routes/produtos.js`
  - `GET /produtos` — lista produtos e aplica filtro por categoria
  - `GET /produtos/novo` — exibe o formulário de cadastro
  - `POST /produtos` — cria um novo produto
  - `GET /produtos/:id/editar` — exibe o formulário de edição
  - `POST /produtos/:id` — atualiza o produto
  - `POST /produtos/:id/deletar` — exclui o produto

- `routes/categorias.js`
  - `GET /categorias` — retorna categorias em formato JSON
  - `POST /categorias` — cria uma nova categoria

### Páginas EJS

As páginas em `views` foram construídas com EJS para renderizar o HTML da aplicação:

- `views/produtos/index.ejs` — página principal com listagem, filtro e cadastro de categorias
- `views/produtos/novo.ejs` — formulário para novo produto
- `views/produtos/editar.ejs` — formulário para edição de produto

## Desafios implementados

### 1. Relacionamento entre produtos e categorias

Foi necessário criar o relacionamento entre `Produto` e `Categoria` usando Sequelize. Isso permitiu associar cada produto a uma categoria e exibir o nome da categoria na listagem.

### 2. Filtro de produtos por categoria

A funcionalidade de filtro foi implementada na rota `GET /produtos`, recebendo o parâmetro `categoriaId` pela query string. A listagem só mostra os produtos da categoria selecionada, com a opção de limpar o filtro.

## Observações finais

Este projeto representa uma aplicação MVC simples de cadastro de produtos, com foco em operações CRUD, relacionamento de dados e renderização de páginas com EJS.
