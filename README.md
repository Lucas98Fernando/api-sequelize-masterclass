# API com Node.js, Sequelize ORM e PostgreSQL

## Comandos do Sequelize-CLI:

- Criar banco de dados:

<pre>
<code>
    npx sequelize db:create
</code>
</pre>

- Criar uma migration:

<pre>
<code>
    npx sequelize migration:create --name=nomedamigracao
</code>
</pre>

- Executar migrations:

<pre>
<code>
    npx sequelize db:migrate
</code>
</pre>

- Reverter a última migração dentro do histórico:

<pre>
<code>
    npx sequelize db:migrate:undo
</code>
</pre>
