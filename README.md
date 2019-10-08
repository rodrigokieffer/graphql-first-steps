# GraphQL First Steps

Esse projeto foi criado como exemplo para os primeiros passos de como criar uma API utilizando GraphQL.

## Pré-Requisitos:
* Node.js instalado.

## Módulos utilizados:
* GraphQL Yoga (https://github.com/prisma-labs/graphql-yoga).
* UUID (https://www.npmjs.com/package/uuid).

## Setup do projeto:

1. Faça o clone do repositório ou baixe o ZIP.
2. No terminal na pasta do projeto, rode `npm install` para instalar as dependências.
3. Rode o comando `npm run dev` para iniciar o projeto.
4. Abra o browser em http://localhost:4000/ para executar o *playground* e rodar as *queries* e *mutations*.

No próprio *playground* você encontra a documentação da API e *Schemas* utilizados.

## Executando o projeto no GraphQL Playground

### Executando as Queries:

**Consultando a lista de tasks:**
```graphql
query AllTasks {
  allTasks{
    id
    description
    status    
  }
}
```

### Executando as Mutations:

**Adicionando uma nova task:**

A mutation retorna a task criada.

```graphql
mutation AddTask($input: CreateTaskInput!) {
  addTask(input: $input) {
    id
    description
    status
  }
}
```

**Em query variables insira os dados da task:**
```json
{ 
  "input": { 
    "description": "This is a test", 
    "status": "TO DO" 
  }
}
```

**Atualizando uma task:**

A mutation retorna a task atualizada.

```graphql
mutation UpdateTask($id: ID!, $input: UpdateTaskInput!) {
  updateTask(id:$id, input:$input) {
    id
    description
    status
  }
}
```

**Em query variables insira os dados da task que deseja atualizar:**

No exemplo abaixo só atualizamos o status da task.

```json
{
  "id": "aef2aef6-c220-4f37-9c98-b2367083043e",
  "input": {
    "status": "DONE"
  }
}
```
