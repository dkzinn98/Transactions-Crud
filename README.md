# 💰 Transactions CRUD

Este projeto é um sistema de gerenciamento de transações financeiras, permitindo aos usuários cadastrar, visualizar, editar e excluir transações. O backend foi desenvolvido em **PHP com Laravel**, enquanto o frontend utiliza **Angular e Angular Material** para uma interface moderna e responsiva.

## 📌 Funcionalidades

- 📋 **Cadastro de transações** com descrição, valor, categoria e tipo (receita/despesa).
- 🔍 **Listagem e filtragem** de transações por tipo.
- 📝 **Edição e exclusão** de transações existentes.
- 📊 **Cálculo automático** de valores negativos para despesas e positivos para receitas.
- 🛠️ **API RESTful** para integração de dados entre frontend e backend.
- 🎨 **Interface moderna** usando Angular Material.
- ✅ **Validações e mensagens de erro** para evitar inconsistências nos dados.

## 🛠️ Tecnologias Utilizadas

### **Frontend (Angular)**
- Angular 15+
- Angular Material
- TypeScript
- RxJS
- SCSS

### **Backend (PHP com Laravel)**
- PHP 8+
- Laravel 10+
- API RESTful
- Eloquent ORM
- Autenticação JWT (futuro)

### **Banco de Dados (PostgreSQL)**
- PostgreSQL 14+
- Migrations do Laravel

## 🚀 Como Rodar o Projeto

### 🔹 Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:
- Node.js e Angular CLI
- PHP 8+ e Composer
- Servidor Apache ou Laravel Artisan
- PostgreSQL

### 🔹 Backend (Laravel)
1. Instale as dependências do Laravel:
   ```sh
   cd backend
   composer install
   ```
2. Crie um arquivo de configuração `.env` baseado no `.env.example` e configure o banco de dados.
3. Gere a chave da aplicação:
   ```sh
   php artisan key:generate
   ```
4. Execute as migrations:
   ```sh
   php artisan migrate --seed
   ```
5. Inicie o servidor:
   ```sh
   php artisan serve
   ```

### 🔹 Banco de Dados (PostgreSQL)
1. Crie o banco de dados e execute os scripts SQL disponíveis em `database/migrations/`.

### 🔹 Frontend (Angular)
1. Instale as dependências do Angular:
   ```sh
   cd frontend
   npm install
   ```
2. Execute o projeto:
   ```sh
   ng serve --open
   ```

A aplicação estará disponível em `http://localhost:4200/`.

## 📂 Estrutura do Projeto

```
Transactions-Crud/
│── backend/            # Código do backend (Laravel)
│   ├── app/            # Controllers, Models e Services
│   ├── database/       # Migrations e Seeders
│   ├── routes/         # Definição de rotas da API
│   ├── config/         # Configurações do Laravel
│   ├── public/         # Pasta pública do Laravel
│   ├── bootstrap/      # Inicialização do Laravel
│
│── frontend/           # Código do frontend (Angular)
│   ├── src/            # Código principal da aplicação
│   ├── app/            # Componentes do Angular
│   ├── services/       # Serviços para comunicação com a API
│   ├── environments/   # Configuração de ambientes
│   ├── main.ts         # Ponto de entrada do Angular
│
│── database/           # Scripts SQL para criação do banco de dados
│── README.md           # Documentação do projeto
```

## 📈 Melhorias Futuras
- 🔒 Implementação de autenticação JWT
- 📊 Adição de dashboards gráficos
- 📱 Melhorias na responsividade
- 📌 Exportação de relatórios em PDF/CSV

## 📝 Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---
Feito com ❤️ por [Deryk Silva](https://github.com/dkzinn98) 🚀
