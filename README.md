Steps to setup: 
npm init -y
npx gitignore node
npm i -D nodemon
npm i express helmet knex sqlite3
touch index.js

add scripts: 
"server": "nodemon index.js"
"start": "node index.js"

Migrations record changes to the database structure over time, just klike git commits record changes to code

configure knex connections
- knex init 
  - creates a knexfile.js
  - luis removed the staging portion of the knex file 
  - change the file name under development to the desired file name
  - useNullAsDefault: true, only for sqlite

commonly used migration commands: 
- npx knex migrate:make <give it a name>... <-- createsa new migration file
  - ex. knex migrate:make init
    - uses development environment by default

- npx knex migrate:latest <-- run prending migrations to update the databse


Project: Track Food AKA menu items
- menu_items table: 
  - id: primary key, unsigned (non-negative numbers) integer
  - name: string, required (NOT NULL), unique, make searching by name fast
  - price: floating point, not required
  - available: boolean, default 'false' 