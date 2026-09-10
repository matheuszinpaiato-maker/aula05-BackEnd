# aula05-BackEnd
# API Inventário da Empresa "Bom de Tecnologia"

- dados.JSON
``` JSON
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500.00,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800.00,
    "patrimonio": "PAT-00126"
  },
  {
    "id": 3,
    "item": "Mouse Logitech",
    "local": "Laboratório 02",
    "dataRegistro": "2026-09-10",
    "valor": 150,
    "patrimonio": "PAT-00127"
  }
]
```

<br>

# Tecnologias
- Vs code
- Node.js
- JavaScript
- JSON
  
<br>

# Passos para executar

- 1 Clone o Repositório
- 2 Abra com VsCode e em um teminal CMD ou BASH didige:
``` 
npm install
npm run dev
```
- 3 Teste as rotas com a extensão *Thunder Client* do VsCode

<br>

# Rotas

```
Post time: http://localhost:3000/inventario/:id
Get times: http://localhost:3000/inventario
Put time: http://localhost:3000/inventario/:id
Delete time: http://localhost:3000/inventario/:id
```

<br>

# Exemplos de Requisição

- Create Post: http://localhost:3000/:id
- Corpo:
``` JSON
{
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500.00,
    "patrimonio": "PAT-00125"
}
```
- Resposta:
``` JSON
{
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500.00,
    "patrimonio": "PAT-00125"
}
```
- Update PUT: http://localhost:3000/inventario/:id

```JSON
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800.00,
    "patrimonio": "PAT-00126"
  },
```
- Resposta:
```JSON
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 04",
    "dataRegistro": "2026-10-03",
    "valor": 3800.00,
    "patrimonio": "PAT-00126"
  },
```

<br> 

# Testes no Thunder Client
