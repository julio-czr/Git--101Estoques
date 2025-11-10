# Microserviço Aluguéis - 101 Estoques

## Descrição
Microserviço responsável pelo gerenciamento de aluguéis de estoques.

## Tecnologias
- Node.js 18
- Express
- Sequelize (suporta Azure SQL e SQLite para dev)

## Instalação
```bash
npm install
```

## Configuração
Copie `.env.example` para `.env` e configure:
- PORT=3002
- AZURE_SQL_CONNECTION=SuaConnectionStringAzureSQL (opcional)
- SQLITE_STORAGE=./data/alugueis.sqlite (usado por padrão em dev)

## Executar
```bash
npm start          # Produção
npm run dev        # Desenvolvimento (com nodemon)
```

## Endpoints

### GET /api/alugueis
Lista todos os aluguéis. Query param opcional: ?status=ativo

### POST /api/alugueis
Cria novo aluguel.
Body: { estoque_id, cliente_nome, cliente_email, data_inicio, data_fim?, valor_mensal, status? }

### GET /api/alugueis/:id
Busca aluguel por ID

### PUT /api/alugueis/:id
Atualiza aluguel

### DELETE /api/alugueis/:id
Deleta / cancela aluguel

## Docker
```bash
docker build -t seu-usuario/ms-alugueis:v1 .
docker run -p 3002:3002 --env-file .env seu-usuario/ms-alugueis:v1
```

## Testar
```bash
# Health check
curl http://localhost:3002/

# Criar aluguel (exemplo)
curl -X POST http://localhost:3002/api/alugueis \
  -H "Content-Type: application/json" \
  -d '{
    "estoque_id": "64b8f9c2f1a4e3b5c6d7e8f9",
    "cliente_nome": "João Silva",
    "cliente_email": "joao@example.com",
    "data_inicio": "2025-10-01",
    "valor_mensal": 500
  }'

# Listar alugueis
curl http://localhost:3002/api/alugueis
```