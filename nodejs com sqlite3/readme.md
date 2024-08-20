


# Documentação de Comandos e `package.json`

## Instalação de Dependências

1. **Instalar Express**: 
   ```bash
   npm install express --save
   ```
   - **Descrição**: Instala o framework Express e adiciona-o às dependências do projeto (`--save`).

2. **Instalar Nodemon**: 
   ```bash
   npm install nodemon --save-dev
   ```
   - **Descrição**: Instala o Nodemon como uma dependência de desenvolvimento (`--save-dev`), útil para reiniciar automaticamente o servidor durante o desenvolvimento.

3. **Instalar EJS**: 
   ```bash
   npm install ejs --save
   ```
   - **Descrição**: Instala o EJS como um motor de templates e adiciona-o às dependências do projeto (`--save`).

4. **Instalar Sequelize**: 
   ```bash
   npm install --save sequelize
   ```
   - **Descrição**: Instala o Sequelize, um ORM para Node.js, e adiciona-o às dependências do projeto (`--save`).

5. **Instalar SQLite3**: 
   ```bash
   npm install --save sqlite3
   ```
   - **Descrição**: Instala o SQLite3, o banco de dados utilizado com o Sequelize, e adiciona-o às dependências do projeto (`--save`).

6. **Instalar Sequelize CLI**: 
   ```bash
   npm install --save-dev sequelize-cli
   ```
   - **Descrição**: Instala o Sequelize CLI como uma dependência de desenvolvimento (`--save-dev`), para facilitar a execução de comandos Sequelize.

## Comandos Sequelize CLI

1. **Inicializar Sequelize**: 
   ```bash
   npx sequelize-cli init
   ```
   - **Descrição**: Inicializa o projeto Sequelize, criando as pastas e arquivos de configuração padrão (`config`, `models`, `migrations`, `seeders`).

2. **Gerar Modelo**: 
   ```bash
   npx sequelize-cli model:generate --name Task --attributes name:string
   ```
   - **Descrição**: Gera um novo modelo `Task` com um atributo `name` do tipo `string`. Cria o arquivo de modelo e a migração correspondente.

3. **Gerar Seed**: 
   ```bash
   npx sequelize-cli seed:generate --name demo-tasks
   ```
   - **Descrição**: Gera um novo arquivo de seed chamado `demo-tasks`, que pode ser usado para popular o banco de dados com dados iniciais.

4. **Executar Migrações**: 
   ```bash
   npx sequelize-cli db:migrate
   ```
   - **Descrição**: Executa todas as migrações pendentes para atualizar a estrutura do banco de dados.

5. **Executar Seeds**: 
   ```bash
   npx sequelize-cli db:seed:all
   ```
   - **Descrição**: Executa todos os arquivos de seed para popular o banco de dados com dados iniciais.

## Rodar o Servidor de Desenvolvimento

1. **Rodar o Servidor**: 
   ```bash
   npm run dev
   ```
   - **Descrição**: Executa o script de desenvolvimento definido no `package.json`, geralmente utilizando o Nodemon para reiniciar o servidor automaticamente durante o desenvolvimento.

## Estrutura do `package.json`

```json
{
  "scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^4.19.2",
    "sequelize": "^6.37.3",
    "sqlite3": "^5.1.7"
  },
  "devDependencies": {
    "nodemon": "^3.1.4",
    "sequelize-cli": "^6.6.2"
  }
}
```

### Explicação do `package.json`:

- **scripts**:
  - **dev**: Executa o `index.js` usando Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento.
  - **test**: Comando padrão para testes, geralmente configurado mais tarde.

- **dependencies**:
  - **ejs**: Motor de template para renderizar views.
  - **express**: Framework para criar aplicações web.
  - **sequelize**: ORM para Node.js, utilizado para interagir com bancos de dados.
  - **sqlite3**: Driver para o banco de dados SQLite.

- **devDependencies**:
  - **nodemon**: Utilizado para reiniciar o servidor automaticamente durante o desenvolvimento.
  - **sequelize-cli**: Ferramenta de linha de comando para Sequelize, usada para gerenciar migrações, seeds, etc.
```
