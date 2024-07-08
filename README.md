# Api-RESTful
# Documentação da API

## Visão Geral
Esta documentação fornece uma visão geral dos endpoints da API, formatos de requisição e resposta, e outras informações relevantes.

## Instalação

Para configurar e executar este projeto localmente, siga estas etapas:

1. Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd <diretorio-do-repositorio>
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados e execute as migrações, se necessário.

4. Inicie o servidor:
    ```bash
    npm start
    ```

O servidor deve estar rodando em `http://localhost:3000`.

## Endpoints da API

### Usuários

#### Obter Todos os Usuários
- **URL:** `/users`
- **Método:** `GET`
- **Resposta:**
    - **Código de Status:** `200 OK`
    - **Corpo:**
    ```json
    [
        {
            "id": 1,
            "Primeironome": "John",
            "idade": 30
        },
        ...
    ]
    ```

#### Obter Usuário por ID
- **URL:** `/users/:id`
- **Método:** `GET`
- **Parâmetros da URL:**
    - `id` (obrigatório): O ID do usuário
- **Resposta:**
    - **Código de Status:** `200 OK`
    - **Corpo:**
    ```json
    {
        "id": 1,
        "Primeironome": "John",
        "idade": 30
    }
    ```

    - **Código de Status:** `404 Not Found`
    - **Corpo:**
    ```json
    {
        "message": "usuário não encontrado"
    }
    ```

#### Criar Usuário
- **URL:** `/users`
- **Método:** `POST`
- **Corpo da Requisição:**
    ```json
    {
        "Primeironome": "John",
        "idade": 30
    }
    ```
- **Resposta:**
    - **Código de Status:** `201 Created`
    - **Corpo:**
    ```json
    {
        "message": "Usuário criado com sucesso"
    }
    ```

## Tratamento de Erros
Em caso de erros, a API responderá com códigos de status apropriados e mensagens de erro no corpo da resposta.

- **500 Internal Server Error**
    ```json
    {
        "message": "Erro interno do servidor",
        "error": "<mensagem de erro>"
    }
    ```

## Estrutura do Projeto

- `index.ts`: Ponto de entrada da aplicação.
- `data-source.ts`: Conexão e inicialização do banco de dados.
- `router/userRoutes.ts`: Definição das rotas de usuário.
- `controllers/userController.ts`: Funções do controlador de usuário.
- `entity/User.ts`: Definição da entidade usuário.

## Código de Exemplo

### Ponto de Entrada (`index.ts`)
```typescript
import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import userRoutes from './router/userRoutes';

const app = express();
const porta = 3000;

app.use(express.json())
app.use('/users', userRoutes)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
});

AppDataSource.initialize().then(async () => {
    console.log("Banco de dados rodando")
}).catch(error => console.log(error));
