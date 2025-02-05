# CRUD de Transações Financeiras

## Sobre o Projeto

Este é um sistema simples para gerenciar suas transações financeiras. Com ele, você pode cadastrar, listar, editar e excluir receitas e despesas.

## Tecnologias Usadas

- **Frontend:** Angular 16+
- **Backend:** PHP (Laravel)
- **Banco de Dados:** PostgreSQL

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <URL-do-repositório>
   ```

2. **Configure o Banco de Dados:**
   - Crie o banco usando o script em `banco/script.sql`.

3. **Backend:**
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   ```

4. **Frontend:**
   ```bash
   cd frontend
   npm install
   ng serve
   ```

5. **Acesse no Navegador:**
   - Frontend: `http://localhost:4200`
   - API Backend: `http://localhost:8000/api`

## Funcionalidades

- Cadastro de receitas e despesas
- Edição e exclusão de transações
- Filtragem por tipo de transação

## Considerações Finais

Qualquer dúvida, estou à disposição!
