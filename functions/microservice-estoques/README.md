# Microserviço Estoques - 101 Estoques

## Descrição
Microserviço responsável pelo gerenciamento de espaços de estoque (boxes) disponíveis para aluguel.

## Tecnologias
- Node.js 18
- Express
- MongoDB Atlas
- Mongoose

## Instalação
```bash
npm install
```

## Configuração
Copie .env.example para .env e configure:
- PORT=3001
- MONGODB_URI=sua_connection_string

## Executar
```bash
npm start          # Produção
npm run dev        # Desenvolvimento (com nodemon)
```

## Endpoints

### GET /api/estoques
Lista todos os estoques. Query param opcional: ?status=disponivel

### POST /api/estoques
Cria novo estoque.
Body: { codigo, nome, tamanho_m2, preco_mensal, localizacao, status }

### GET /api/estoques/:id
Busca estoque por ID

### PUT /api/estoques/:id
Atualiza estoque

### DELETE /api/estoques/:id
Deleta estoque

## Docker
```bash
docker build -t seu-usuario/ms-estoques:v1 .
docker run -p 3001:3001 --env-file .env seu-usuario/ms-estoques:v1
```

## Testar
```bash
# Health check
curl http://localhost:3001/

# Criar estoque
curl -X POST http://localhost:3001/api/estoques \
  -H "Content-Type: application/json" \
  -d '{
    "codigo": "EST-001",
    "nome": "Box 10m² - Zona Sul",
    "tamanho_m2": 10,
    "preco_mensal": 500,
    "localizacao": "Rua X, 123",
    "status": "disponivel"
  }'

# Listar estoques
curl http://localhost:3001/api/estoques
```