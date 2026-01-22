<!-- Instruções concisas para agentes de codificação (Copilot/GitHub AI) -->
# Copilot instructions — Syntax Wear API

Siga estas orientações para ser imediatamente produtivo neste repositório.

- **Arquitetura (big picture):** API REST em Fastify (see [src/app.ts](src/app.ts)). Rotas principais: `/products` e `/auth` (ver [src/routes]). A persistência usa Prisma com PostgreSQL (schema em [prisma/schema.prisma](prisma/schema.prisma)).

- **Como rodar / comandos úteis:**
  - Desenvolvimento: `npm run dev` (usa `tsx watch src/app.ts`).
  - Build: `npm run build` (TypeScript -> `dist`).
  - Prisma: `npm run prisma:generate`, `npm run prisma:migrate`, `npm run prisma:studio`, `npm run prisma:seed`.

- **Variáveis de ambiente importantes:** `DATABASE_URL`, `JWT_SECRET`, `PORT`.

- **Padrões de projeto e convenções específicas:**
  - Validação de entrada usa `zod` em [src/utils/validator.ts]; handlers chamam `schema.parse()` (ex.: `registerSchema.parse(...)`). Use `parse()` para garantir exceção imediata em caso de dados inválidos.
  - Autenticação JWT está registrada globalmente em [src/app.ts]; para gerar token use `request.server.jwt.sign({ userId })` como nos controllers.
  - Soft-delete para produtos: `deleteProduct` marca `active: false` em vez de remover (veja [src/services/products.service.ts]). Preserve esse comportamento.
  - Slugs: gerados com `slugify(..., { lower: true, strict: true, locale: 'pt' })` em [src/controllers/products.controller.ts]. Não alterar sem atualizar validações/únicos no banco.
  - Decimal handling: `Product.price` é `Decimal` no Prisma; as funções convertem com `new Prisma.Decimal(String(price))` (veja [src/services/products.service.ts]). Mantenha essa conversão ao manipular preços.
  - Campos JSON: `colors`, `images`, `sizes` são armazenados como JSON no Prisma — envie/espere objetos/arrays JSON.

- **Erros e mensagens:** o código atual lança `Error` com mensagens em pt-br (ex.: "Produto não encontrado"). Siga o padrão textual existente ao propagar erros, exceto se for necessária padronização — então proponha mudança em PR separado.

- **Onde alterar rotas/handlers:**
  - Rotas: [src/routes/products.routes.ts] e [src/routes/auth.routes.ts].
  - Lógica de negócio: [src/services/*.ts].
  - Controladores: [src/controllers/*.ts].

- **Documentação e API reference:** OpenAPI/Swagger está configurado em [src/app.ts] e há uma UI de referência em `/api-docs` (via `@scalar/fastify-api-reference`).

- **Testes e qualidade:** não há testes no repositório atualmente. Se for adicionar, prefira testes unitários pequenos para `services` e integração para rotas, usando o Fastify instance exportado em `src/app.ts`.

- **Exemplos rápidos (faça isto para alterações que toquem dados/validações):**
  - Ao mudar `Product` no Prisma: criar migração, rodar `prisma generate`, ajustar conversões de `Decimal` e campos JSON nos serviços.
  - Ao alterar autenticação: atualizar `JWT_SECRET` e garantir que `request.server.jwt` continue disponível (registro em [src/app.ts]).

- **Onde procurar convenções adicionais:**
  - Inicialização e middlewares: [src/app.ts], [src/middlewares].
  - Acesso ao DB: [src/utils/prisma.ts].

Se algo aqui estiver incompleto ou você quiser que eu detalhe um exemplo de PR, diga o que prefere — eu ajusto o arquivo.
