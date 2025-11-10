# BFF Node - 101estoques

Backend For Frontend (BFF) para orquestração dos microserviços e functions do 101estoques.

## Responsabilidades

- Agregar dados dos microserviços de estoques e aluguéis
- Expor endpoints unificados para o frontend
- Fazer proxy de operações CRUD para os microserviços
- Enviar eventos para a function-eventos

## Endpoints

- GET /api/estoques - Lista todos os estoques
- GET /api/estoques/:id - Retorna um estoque específico
- POST /api/estoques - Cria um novo estoque via evento
- PUT /api/estoques/:id - Atualiza um estoque
- DELETE /api/estoques/:id - Remove um estoque

- GET /api/alugueis - Lista todos os aluguéis
- GET /api/alugueis/:id - Retorna um aluguel específico
- POST /api/alugueis - Cria um novo aluguel
- PUT /api/alugueis/:id - Atualiza um aluguel
- DELETE /api/alugueis/:id - Remove um aluguel

- GET /api/agregado/estoques-alugueis - Retorna dados agregados de estoques e aluguéis

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente (.env)
cp .env.example .env

# Executar em desenvolvimento
npm run dev

# Executar em produção
npm start
```

## Variáveis de Ambiente

```
PORT=3000
ESTOQUES_API_URL=http://localhost:3001
ALUGUEIS_API_URL=http://localhost:3002
EVENTOS_API_URL=http://localhost:7071
```

## Docker

```bash
# Build
docker build -t bff-node .

# Run
docker run -p 3000:3000 bff-node
```