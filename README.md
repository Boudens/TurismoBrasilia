# Turismo Brasília

Projeto Full-Stack desenvolvido para promover o turismo local em Brasília, a capital do Brasil. O sistema é composto por uma interface moderna e intuitiva, onde os usuários podem explorar informações sobre a cidade, seus pontos turísticos, cultura, gastronomia e muito mais. A aplicação oferece uma maneira prática de descobrir as belezas e particularidades de Brasília.

## Objetivo

Este projeto tem como objetivo fornecer uma plataforma informativa e interativa para turistas locais e internacionais que desejam conhecer mais sobre Brasília. Ele inclui:

- Informações sobre os pontos turísticos mais famosos da cidade.
- Sugestões de transporte, alimentação e dicas de segurança.
- Funcionalidade de login e personalização da experiência do usuário.
- Backend robusto com API REST para manipulação de dados e integração com o frontend.

## Tecnologias Utilizadas

### Front-End:
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Para navegação entre páginas e componentes.
- **CSS-in-JS** (Inline Styles): Estilos aplicados diretamente nos componentes.
- **Axios**: Para chamadas HTTP ao backend.
  
### Back-End:
- **C# (ASP.NET Core)**: Framework para desenvolvimento do backend e API RESTful.
- **SQL Server ou NoSQL (MongoDB)**: Banco de dados utilizado para armazenamento de informações sobre pontos turísticos, usuários, etc.
  
### Outros:
- **Docker**: Para containerização do banco de dados e garantir o ambiente de desenvolvimento consistentes.
- **Git & GitHub**: Controle de versão e hospedagem do código.
  
## Funcionalidades

### Home
- Exibição de pontos turísticos populares de Brasília.
- Dicas de transporte, alimentação e segurança para turistas.
- Informações sobre a arquitetura e cultura local.

### Sobre
- Descrição detalhada de Brasília, incluindo sua história e planejamento urbano.
- Seção de pontos turísticos imperdíveis, com imagens e informações adicionais.

### Página de Login
- Autenticação de usuários com uma interface simples e segura.
  
### Cadastro de Cliente
- Formulário para registrar novas contas de usuários.

### CRUD de Pontos Turísticos
- Adicionar, editar e remover pontos turísticos, com imagens e descrições.

### API RESTful
- Endpoints para recuperar dados sobre pontos turísticos, categorias, e outras informações relacionadas ao turismo local.

## Como Rodar o Projeto Localmente

### Requisitos
- [Node.js](https://nodejs.org/) instalado.
- [Docker](https://www.docker.com/get-started) para rodar o banco de dados.
- .NET SDK (caso esteja rodando o backend localmente).

1. Clone o repositório:
   
   git clone https://github.com/Boudens/TurismoBrasilia.git
   cd TurismoBrasilia/frontend

2. Instale as dependências:

    npm install

3. Inicie o servidor de desenvolvimento:

    npm start

    Acesse a aplicação no navegador: http://localhost:3000

4. Passos para o Back-End

    dotnet run

Sempre exibir os detalhes

git clone https://github.com/Boudens/TurismoBrasilia.git
cd TurismoBrasilia/backend

Configure o banco de dados no Docker ou use uma instância local.

Rode o projeto no Visual Studio ou pelo comando CLI:

    dotnet run

    O servidor backend ficará disponível em http://localhost:5187.

Passos para Docker

    docker-compose up -d

O Docker irá iniciar a aplicação com o banco de dados configurado corretamente.
