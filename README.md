# CRUD de Transações Financeiras

## Sobre o Projeto

Este é um projeto simples de uma aplicação web para gerenciar transações financeiras. Com ele, você pode cadastrar, listar, editar e excluir receitas e despesas. O mesmo formulário é usado para registrar tanto receitas quanto despesas.

## Tecnologias Usadas

- **Frontend:** Angular (versão 16 ou superior)
- **Backend:** PHP com Laravel
- **Banco de Dados:** PostgreSQL

## Estrutura de Pastas

```
banco/      => Scripts SQL para criar o banco de dados
backend/    => Código do backend (Laravel)
frontend/   => Código do frontend (Angular)
```

## Como Configurar o Projeto

### 1. Configurar o Banco de Dados

- Certifique-se de ter o PostgreSQL instalado.
- Crie o banco de dados chamado `desafio_uitec`.
- Execute o script SQL localizado em `banco/script.sql` para criar as tabelas e inserir dados de exemplo.

```bash
psql -U postgres -d desafio_uitec -f banco/script.sql
```

### 2. Configurar o Backend (Laravel)

1. Navegue até a pasta do backend:

```bash
cd backend
```

2. Instale as dependências do Laravel:

```bash
composer install
```

3. Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

4. Configure as credenciais do banco de dados no arquivo `.env`:

```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=desafio_uitec
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
```

5. Rode as migrações (se necessário):

```bash
php artisan migrate
```

6. Inicie o servidor do Laravel:

```bash
php artisan serve
```

O backend estará disponível em `http://localhost:8000`.

### 3. Configurar o Frontend (Angular)

1. Navegue até a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências do Angular:

```bash
npm install
```

3. Inicie o servidor do Angular:

```bash
ng serve
```

O frontend estará disponível em `http://localhost:4200`.

## Funcionalidades do Projeto

- **Cadastrar Transações:** Informe a descrição, valor, tipo (receita ou despesa) e categoria.
- **Listar Transações:** Visualize todas as transações cadastradas.
- **Filtrar por Tipo:** Filtro para receitas ou despesas.
- **Editar Transações:** Atualize as informações de uma transação existente.
- **Excluir Transações:** Remova transações que não forem mais necessárias.

## Considerações Finais

Este projeto foi desenvolvido para fins de aprendizado e para o desafio técnico da Uitec. Qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato.

Bom código! 🚀

