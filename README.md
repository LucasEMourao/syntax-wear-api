# English Version

# Syntax Wear API

Robust and performant REST API developed to support the **Syntax Wear** e-commerce platform. Built with a focus on scalability and static typing, using **Node.js**, **Fastify**, and **TypeScript**.

## 🔗 Important Links

- **Backend (Production API):** [https://syntax-wear-api-z8qa.onrender.com](https://syntax-wear-api-z8qa.onrender.com)
- **Frontend (Application):** [https://syntax-wear-app-zeta.vercel.app/](https://syntax-wear-app-zeta.vercel.app/)
- **Repository:** [https://github.com/LucasEMourao/syntax-wear-api](https://github.com/LucasEMourao/syntax-wear-api)
- **API Documentation (Swagger):** Available at `/api-docs` route when the application is running.
- 🇧🇷 [Versão em Português](#-versão-em-português)

---

## 🛠️ Technologies Used

- **Core:** Node.js & Fastify
- **Language:** TypeScript
- **ORM & Database:** Prisma & PostgreSQL
- **Validation:** Zod
- **Authentication:** JWT (JSON Web Token)
- **Testing:** Vitest
- **Documentation:** OpenAPI / Swagger (via `@scalar/fastify-api-reference`)

---

## 🚀 Installation and Setup

### Prerequisites

- Node.js (v18+)
- npm or yarn
- PostgreSQL running locally or via Docker

### Step by Step

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LucasEMourao/syntax-wear-api.git
   cd syntax-wear-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Copy the example file and adjust according to your environment.

   ```bash
   cp .env.example .env
   ```

   > Update `DATABASE_URL` in the `.env` file with your PostgreSQL credentials.

4. **Configure Database (Prisma):**
   Generate Prisma client and run migrations to create tables.

   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

   _(Optional) Populate database with initial data:_

   ```bash
   npm run prisma:seed
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```
   The server will be running at `http://localhost:3000`.

---

## 📜 Available Scripts

- `npm run dev`: Starts the server in development mode (with watch).
- `npm run build`: Compiles TypeScript to JavaScript in the `dist` folder.
- `npm start`: Starts the production server (requires previous build).
- `npm run prisma:generate`: Generates Prisma Client types.
- `npm run prisma:migrate`: Applies pending migrations to the database.
- `npm run prisma:studio`: Opens a web interface to visualize the database.
- `npm test`: Runs the test suite with Vitest.

---

## 📂 Project Structure

The architecture follows the layered pattern to facilitate maintenance and testing:

```
src/
├── controllers/  # Input/output logic for HTTP requests
├── services/     # Business rules and database communication
├── routes/       # API route definitions
├── middlewares/  # Interceptors (Auth, Admin, etc.)
├── utils/        # Utilities (Zod Validators, Prisma Client)
├── types/        # Global TypeScript type definitions
└── app.ts        # Entry point and Fastify configuration
```

---

## 📝 License

This project is under the MIT license.
Developed by [LucasEMourão](https://github.com/LucasEMourao)

# <a name="-versão-em-português"></a> 🇧🇷 Versão em Português

# Syntax Wear API

API REST robusta e performática desenvolvida para suportar a plataforma de e-commerce **Syntax Wear**. Construída com foco em escalabilidade e tipagem estática, utilizando **Node.js**, **Fastify** e **TypeScript**.

## 🔗 Links Importantes

- **Backend (API em Produção):** [https://syntax-wear-api-z8qa.onrender.com](https://syntax-wear-api-z8qa.onrender.com)
- **Frontend (Aplicação):** [https://syntax-wear-app-zeta.vercel.app/](https://syntax-wear-app-zeta.vercel.app/)
- **Repositório:** [https://github.com/LucasEMourao/syntax-wear-api](https://github.com/LucasEMourao/syntax-wear-api)
- **Documentação da API (Swagger):** Disponível na rota `/api-docs` da aplicação rodando.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** Node.js & Fastify
- **Linguagem:** TypeScript
- **ORM & Banco de Dados:** Prisma & PostgreSQL
- **Validação:** Zod
- **Autenticação:** JWT (JSON Web Token)
- **Testes:** Vitest
- **Documentação:** OpenAPI / Swagger (via `@scalar/fastify-api-reference`)

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- PostgreSQL rodando localmente ou via Docker

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/LucasEMourao/syntax-wear-api.git
   cd syntax-wear-api
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Copie o arquivo de exemplo e ajuste conforme seu ambiente.

   ```bash
   cp .env.example .env
   ```

   > Atualize a `DATABASE_URL` no arquivo `.env` com as credenciais do seu banco PostgreSQL.

4. **Configure o Banco de Dados (Prisma):**
   Gere o cliente Prisma e rode as migrações para criar as tabelas.

   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

   _(Opcional) Popule o banco com dados iniciais:_

   ```bash
   npm run prisma:seed
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O servidor estará rodando em `http://localhost:3000`.

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento (com watch).
- `npm run build`: Compila o TypeScript para JavaScript na pasta `dist`.
- `npm start`: Inicia o servidor de produção (requer build prévio).
- `npm run prisma:generate`: Gera os tipos do Prisma Client.
- `npm run prisma:migrate`: Aplica migrações pendentes ao banco de dados.
- `npm run prisma:studio`: Abre uma interface web para visualizar o banco de dados.
- `npm test`: Executa a suíte de testes com Vitest.

---

## 📂 Estrutura do Projeto

A arquitetura segue o padrão de camadas para facilitar a manutenção e testes:

```
src/
├── controllers/  # Lógica de entrada/saída das requisições HTTP
├── services/     # Regras de negócio e comunicação com o banco de dados
├── routes/       # Definição das rotas da API
├── middlewares/  # Interceptadores (Auth, Admin, etc.)
├── utils/        # Utilitários (Validadores Zod, Cliente Prisma)
├── types/        # Definições de tipos TypeScript globais
└── app.ts        # Ponto de entrada e configuração do Fastify
```

---

## 📝 Licença

Este projeto está sob a licença MIT. Desenvolvido por [LucasEMourão](https://github.com/LucasEMourao)

---
