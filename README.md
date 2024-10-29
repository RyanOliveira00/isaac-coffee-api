# Isaac Coffee API

Uma API RESTful para gerenciamento de produtos de uma cafeteria, construída com Bun e Elysia.

## 🚀 Tecnologias

- [Bun](https://bun.sh) - Runtime JavaScript/TypeScript
- [Elysia](https://elysiajs.com) - Framework Web
- [@elysiajs/swagger](https://elysiajs.com/plugins/swagger.html) - Documentação OpenAPI/Swagger

## 📋 Pré-requisitos

- [Bun](https://bun.sh) instalado em sua máquina

## 🛠️ Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/isaac-coffee-api.git
```

2. Entre no diretório

```bash
cd isaac-coffee-api
```

3. Instale as dependências

```bash
bun install
```

4. Inicie o servidor de desenvolvimento

```bash
bun run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Documentação da API

A documentação Swagger está disponível em `http://localhost:3000/swagger`

### Endpoints

| Método | Rota                   | Descrição               |
| ------ | ---------------------- | ----------------------- |
| GET    | /products              | Lista todos os produtos |
| GET    | /products/:id          | Busca produto por ID    |
| GET    | /products/search/:name | Busca produto por nome  |
| POST   | /products              | Cria novo produto       |
| PUT    | /products/:id          | Atualiza produto        |
| DELETE | /products/:id          | Remove produto          |
| POST   | /products/:id/buy      | Compra produto          |

### Modelo de Produto

```typescript
{
  id: string;
  name: string;
  price: number;
  description: string;
  category: "coffee" | "food" | "merchandise";
  stock: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Exemplos de Requisições

#### Criar Produto

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Café Espresso",
    "price": 5.0,
    "description": "Café espresso tradicional",
    "category": "coffee",
    "stock": 100,
    "imageUrl": "https://storage.googleapis.com/isaac-coffee/espresso.jpg"
  }'
```

#### Comprar Produto

```bash
curl -X POST http://localhost:3000/products/1/buy \
  -H "Content-Type: application/json" \
  -d '{
    "quantity": 2
  }'
```

## 🧪 Testes

O projeto utiliza o framework de testes integrado do Bun. Os testes estão organizados por caso de uso em `tests/use-cases/`.

### Executando os Testes

```bash
# Roda todos os testes
bun test

# Roda um teste específico
bun test tests/use-cases/list-products.spec.ts

# Roda testes com watch mode
bun test --watch
```

### Estrutura de Testes

```
tests/
  use-cases/
    ├── buy-product.spec.ts
    ├── create-product.spec.ts
    ├── find-product-by-id.spec.ts
    ├── find-product-by-name.spec.ts
    ├── list-products.spec.ts
    ├── remove-product.spec.ts
    └── update-product.spec.ts
```

## 📁 Estrutura do Projeto

```
src/
  ├── database/        # Camada de persistência
  │   └── products.ts  # Repositório de produtos
  ├── types/          # Definições de tipos
  │   └── product.ts  # Interface do produto
  ├── use-cases/      # Casos de uso da aplicação
  │   ├── buy-product.ts
  │   ├── create-product.ts
  │   ├── find-product-by-id.ts
  │   ├── find-product-by-name.ts
  │   ├── list-products.ts
  │   ├── remove-product.ts
  │   └── update-product.ts
  └── index.ts        # Ponto de entrada da aplicação
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Futuras Melhorias

- [ ] Adicionar autenticação
- [ ] Implementar persistência com banco de dados
- [ ] Adicionar validação de imagens
- [ ] Implementar upload de imagens
- [ ] Adicionar sistema de categorias
- [ ] Implementar cache
- [ ] Adicionar paginação na listagem de produtos
- [ ] Implementar sistema de busca avançada
- [ ] Adicionar logs estruturados
- [ ] Implementar métricas e monitoramento
