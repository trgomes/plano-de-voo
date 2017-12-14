# Planos de voo
Client Angular(1.6.7) para consumir dados da [API-REST](https://github.com/trgomes/api-rest-pv) contruída em PHP

 
[![N|Solid](https://uploaddeimagens.com.br/images/001/207/572/full/20140509082052-Button_play.png?1513005795)](http://trgomes.esy.es/plano-de-voo/public/voos)

[![N|Solid](https://uploaddeimagens.com.br/images/001/211/513/full/home.JPG?1513233629)](https://nodesource.com/products/nsolid)

## O que foi feito?
1) API rest com php usando o framework LARAVEL
2) Client WEB com ANGULAR 1.6.7

## Como executar o programa?

Para facilitar a execução,  o serviço rest foi previamente hospedado em um servidor (Digital Ocean). Desta forma, os únicos requisitos para execução, serão um servidor local (no meu caso APACHE) e acesso a internet. **host/plano-de-voo/public**

    Ex.: localhost/plano-de-voo/public
    
1 Cumprindo os dois requisitos, clone o projeto e execute no servidor de sua preferência (no apache -  dentro de /htdocs): `git clone https://github.com/trgomes/plano-de-voo.git`.

Seguem  algumas opções:
- Apache
- http-server (neste caso você deverá ter o npm instalado)

Agora, se preferir e quiser rodar o sistema completo, localemente, seguem os passos:

Requisitos
------------
- PHP 7 - Definido no path da máquina para execução em linha de comando
- Mysql 5.4 ou superior
- Servidor Apache
***obs.: Se preferir instale toda stack de uma só vez, utilizando o XAMP, WAMP server... De acordo com sua preferência.***

Instalação da API ou Serviço (como preferir)
------------
1. Clone o projeto `git clone https://github.com/trgomes/api-rest-pv.git`.
2. Crie um banco de dados (plano_voo).
3. Modifique o arquivo `.env` que fica na raiz do projeto com os dados so seu banco (DB_DATABASE=plano_voo, DB_USERNAME= user, DB_PASSWORD=password)
4. Dentro da pasta do projeto execute o comando `php artisan migrate `, para criar as tabelas no banco de dados.
6. No mesmo local nicie o servidor web, como o comando `php artisan serve`.
7. Acesse o link [http://localhost:8000](http://localhost:8000). Se aparecer a tela de boas vindas do laravel, sucesso! O serviço rest já está funcionando

Instalação do cliente angular
------------
1. Clone o projeto `git clone https://github.com/trgomes/plano-de-voo.git`.
2. Altere a ***baseUri*** dentro no arqui `app > config > configValues`. O padrão está configurado para acesso ao servidor online (http://104.131.9.240/api/). Comente esta linha e marque habilite a outra (http://localhost:8000/api).
3. Pronto, agora é só colocar a pasta no servidor e acessar o endereço pelo navegadro. Ex.: Apache - (localhost/plano-de-voo/public)

Explicando algumas coisas
------------
**1 - SERVIÇO - REST**

### MER
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

**2 - CLIENT - ANGULAR**

O clint foi separado pela seguinte estrutura de diretórios:

1) >app -> Aqui, ficam todos os código .js do sistema.
2)    >app>app.js -> Neste arquivo está a configuração do módulo pricipal ("app") da     aplicação.
3)    >app>config -> Aqui nos temos dois arquivos importantes. O primeiro (configValue.js) responsavél pela configuração dos valores que deverão serusados em toda a aplicação e o segundo (routs.js), responsável pelo gerenciamento das rotas.
4)  >app>controllers -> Localização dos controllers
5)  >app>directivies -> Onde ficam localizadas as diretivas. Neste projeto elas estão sendo usadas apenas para máscaras do formulário de cadasstro e edição  de voos. Duas máscaras simples, de data e hora.
6) >app>services -> Estes são os arquivos respnsáveis pelas requisições http do sistema.
7) >public ->  Nesta pasta, encontran-se as views e o arquivo index principal, respnsável pela interação da SPA juntamente com as rotas.

    
    

