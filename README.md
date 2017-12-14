# plano-de-voo
Client Angular(1.6.7) para consumir dados da [API-REST](https://github.com/trgomes/api-rest-pv) contruída em PHP

# Plano de Voo 
[![N|Solid](https://uploaddeimagens.com.br/images/001/207/572/full/20140509082052-Button_play.png?1513005795)](https://nodesource.com/products/nsolid)

## O QUE FOI FEITO?
 - API rest com php usando o framework LARAVEL
 - Client WEB com ANGULAR 1.6.7

## SERVIÇO - REST

##### MER
O modelo de dados definido para o projeto foi o seguinte:

[![N|Solid](https://uploaddeimagens.com.br/images/001/211/454/full/MER-plano-de-voo.png?1513225716)](https://nodesource.com/products/nsolid)


### Rotas:

| Método | URI | DESCRIÇÃO |
| ------ | ------ | ------ |
| GET    | api/aeronaves       | Retorna todos as aeronaves cadastradas
| POST   | api/aeronaves       | Cadastra uma nova aeronave
| DELETE | api/aeronaves/{id}  | Exclui uma aeronave
| PUT    | api/aeronaves/{id}  | Altera o resigtro de uma aeronave identificada pelo ID
| GET    | api/aeronaves/{id}  | Retorna o registro de uma aeronave especificada pelo ID
| POST   | api/aeroportos      | Cadastra um novo aeroporto
| GET    | api/aeroportos      | Retorna todos as aeroportos cadastrados
| GET    | api/aeroportos/{id} | Retorna o registro de um aeroporto especificado pelo ID
| PUT    | api/aeroportos/{id} | Altera o resigtro de um aeroporto identificado pelo ID
| DELETE | api/aeroportos/{id} | Exclui um aeroporto
| POST   | api/voos            | Cadastra um novo voo
| GET    | api/voos            | Retorna todos os voos cadastrados
| DELETE | api/voos/{id}       | Exclui um voo
| PUT    | api/voos/{id}       | Altera o registro de um voos identificado pelo ID
| GET    | api/voos/{id}       | Retorna o registro de um voo especificado pelo ID
| POST   | api/tipos           | Cadastra um novo tipo para aeronave
| GET    | api/tipos           | Retorna todos os tipos de aeronaves cadastrados


### Código fonte: 
Repositório: [https://github.com/trgomes/api-rest-pv](https://github.com/trgomes/api-rest-pv)
Models: [https://github.com/trgomes/api-rest-pv/tree/master/app](https://github.com/trgomes/api-rest-pv/tree/master/app)
Controllers: [https://github.com/trgomes/api-rest-pv/tree/master/app/Http/Controllers](https://github.com/trgomes/api-rest-pv/tree/master/app/Http/Controllers)
Routs: [https://github.com/trgomes/api-rest-pv/blob/master/routes/api.php](https://github.com/trgomes/api-rest-pv/blob/master/routes/api.php)
