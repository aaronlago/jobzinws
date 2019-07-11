REST API em Node.js e Express.js - Cadastro e manipulação de planetas.


Desafio Técnico, desenvolver uma aplicação Node REST API, consumindo uma SWAPI(The Star Wars API), com as seguintes funcionalidade:

•	Listar, adicionar e remover planetas;
•	Buscar por nome e Id;
•	Consultar o número de aparições em filmes, do planeta existente.

Guia

Clonar o repositório do projeto: 

git clone https://github.com/aaronlago/jobzinws.git

Instalar as dependência:

npm install

Iniciar a aplicação:

nodemon .bin/server

Arquitetura REST

Adicionar Planeta - POST: http://localhost:300/planeta/create

•	Requisito para realizar o post, inserir o nome, clima e terreno;
•	O id sera gerado automaticamente;
•	O número de aparições é gerado ao consmir os dados da API.

EXEMPLO POST : /create

{
  "name": "Alderaan",
  "climate": "temperate",
  "terrain": "grasslands, mountains"
}

Resposta:

{
    "result": {
        "planet": {
            "_id": "5d275172003ab976c6fae104",
            "name": "Alderan",
            "climate": "temperate",
            "terrain": "grasslands, mountains",
            "countFilms": 0,
            "createdAt": "2019-07-11T15:10:42.582Z",
            "updatedAt": "2019-07-11T15:10:42.582Z",
            "__v": 0
        }
    }
}

Listar todos os planetas  - GET : http://localhost:3000/planeta/list

•	Retorna todos os planetas já cadastrados no banco de dados, cada planeta no formato JSON, conforme o model Schema.

EXEMPLO GET : /list

{
    "result": {
        "planets": [
            {
                "_id": "5d261d07d2ed3b5bffdadfa2",
                "name": "Tatooine",
                "climate": "Arid",
                "terrain": "Dessert",
                "countFilms": 5,
                "createdAt": "2019-07-10T17:14:47.766Z",
                "updatedAt": "2019-07-10T17:14:47.766Z",
                "__v": 0
            },
            {
                "_id": "5d2631990274cf5e04fbb8e9",
                "name": "Tatoooine",
                "climate": "Arid",
                "terrain": "Dessert",
                "countFilms": 0,
                "createdAt": "2019-07-10T18:42:33.607Z",
                "updatedAt": "2019-07-10T18:42:33.607Z",
                "__v": 0
            },
            {
                "_id": "5d264cbc10b6d36f9106e026",
                "name": "Tatoooooine",
                "climate": "Arid",
                "terrain": "Dessert",
                "countFilms": 0,
                "createdAt": "2019-07-10T20:38:20.256Z",
                "updatedAt": "2019-07-10T20:38:20.256Z",
                "__v": 0
            },
            {
                "_id": "5d264cfd10b6d36f9106e027",
                "name": "pp",
                "climate": "Arid",
                "terrain": "Dessert",
                "countFilms": 0,
                "createdAt": "2019-07-10T20:39:25.109Z",
                "updatedAt": "2019-07-10T20:39:25.109Z",
                "__v": 0
            },
            {
                "_id": "5d275172003ab976c6fae104",
                "name": "Alderan",
                "climate": "temperate",
                "terrain": "grasslands, mountains",
                "countFilms": 0,
                "createdAt": "2019-07-11T15:10:42.582Z",
                "updatedAt": "2019-07-11T15:10:42.582Z",
                "__v": 0
            }
        ]
    }

Buscar planeta por Nome - GET : http://localhost:3000/planeta/find/name/{inserir-nome-aqui}

•	O nome do planeta cadastrado é adicionado ao bando de dados, retornando um JSON com sucesso.

EXEMPLO GET : /find/name/Alderaan

{
    "result": {
        "planet": {
            "_id": "5d275172003ab976c6fae104",
            "name": "Alderan",
            "climate": "temperate",
            "terrain": "grasslands, mountains",
            "countFilms": 0,
            "createdAt": "2019-07-11T15:10:42.582Z",
            "updatedAt": "2019-07-11T15:10:42.582Z",
            "__v": 0
        }
    }
}

Buscar planeta por Id - GET : http://localhost:3000/planeta/find/id/{inserir-id-aqui}

•	.O Id gerado automaticamente quando a requisição e feita com sucesso é adicionado ao bando de dados, retornando um JSON.

Exemplo GET : find/id/5d261d07d2ed3b5bffdadfa2

Resposta: 
{
    "result": {
        "planet": {
            "_id": "5d261d07d2ed3b5bffdadfa2",
            "name": "Tatooine",
            "climate": "Arid",
            "terrain": "Dessert",
            "countFilms": 5,
            "createdAt": "2019-07-10T17:14:47.766Z",
            "updatedAt": "2019-07-10T17:14:47.766Z",
            "__v": 0
        }
    }
}

Deletar Planeta - DELETE : http://localhost:300/planeta/delete/id

•	Remove o planeta pelo id cadastrado no bando de dados

EXEMPLO DELETE : delete/5d2631990274cf5e04fbb8e9

{
	"result": "Estrela da morte passou por aqui... planeta removido com sucesso"
}

