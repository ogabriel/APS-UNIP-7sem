# APS-UNIP-7sem

O que é uma APS?
=================
APS, ou, Atividade Prática Supervisionada, é um exercício em grupo feito semestralmente pelos alunos da instituição de ensino UNIP. O tema, indiferente do curso que está sendo prestado, está sempre ligado a soluções sustentáveis ou ao meio ambiente.
No caso do curso que eu presto, Ciência da computação, além do trabalho escrito, tem de ser entregue uma aplicação, cujo os requisitos são ditados pelo coordenador do curso.

Qual a proposta desse semestre?
-----------
Criar um sistema para o monitoramento de árvores e plantas pelo mundo, podendo gerenciar compensação de carbono feita pelas empresas e árvores plantadas por usuários comúns voluntários.

Tecnologias usadas
-----------
- nodejs
- leaflet
- OpenStreetMap
- express
- sequelize
- postgreSQL (with Postgis)
- passport

TODO
-----------
- adicionar estrutura básica de pastas
- configurar banco de dados
- criar página principal (mapa)
- adicionar campo de pesquisa na página principal
- adicionar página de login
- adicionar página de criar usuário (comúm e empresa)
- adicionar página de criação de árvore que deve estár ligada ao campo de pesquisa
- adicionar APIs

APIs
-----------
- /api
  - /v1
    - /users
      - GET /users/:id
      - POST /users/:id (create)
      - PUT /users/:id (update)
    - /companies
      - GET /companies/
    - /trees
      - GET /trees
      - GET /trees/:id
      - POST /trees/:id (create)
      - PUT /trees/:id (update)

APSs anteriores:
-----------
* **APS 2º semestre de 2019:** [Sistema de autenticação biométrica](https://github.com/ogabriel/APS-UNIP-6sem)
* **APS 1º semestre de 2019:** [Comunicação em rede através de WebSocket](https://github.com/ogabriel/APS-UNIP-5sem)
* **APS 2º semestre de 2018:** [Apresentar 3 tipos de Sort Diferentes](https://github.com/ogabriel/APS-UNIP-4sem)
* **APS 1º semestre de 2018:** [Programa console sobre sustentabilidate](https://github.com/ogabriel/APS-UNIP-3sem)
* **APS 2º semestre de 2017:** [Cifra de César](https://github.com/ogabriel/APS-UNIP-2sem)
* **APS 1º semestre de 2017:** [Site sobre cidades sustentáveis](https://github.com/ogabriel/APS-UNIP-1sem)
