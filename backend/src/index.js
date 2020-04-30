const express = require('express'); //constante express recebe todos os dados de do framework express
const cors    = require('cors');
const routes  = require('./routes');

const app = express(); //instanciar constante express

// app.use(cors({
//   origin: 'http://meuapp.com'
// })); //Em produção somente a origem vai conseguir o acesso ao backend

app.use(cors()); //Em desenvolvimento qualquer app front end tem acesso
app.use(express.json());
app.use(routes); //importante usar o routes abaixo do express.json !

app.listen(3333); //ouvir a porta 3333
/* 
  Rotas / Recursos
*/
/*
  Métodos HTTP:

  GET: Buscar/Listar uma informação no Back End   
  POST: Criar uma informação no Back End
  PUT: Alterar uma informação no Back End
  DELETE: Deletar uma informação no Back end
*/

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após  "?" (Filtros, paginação) Exemplo: "http://localhost:3333/users?name=Gian&idade=26"
 * Route Params: Parâmetros utilizados para identificar recursos Exemplo"http://localhost:3333/users/:id"
 * Request Body: 
 */

 /**
  * SQL: MySql, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
  * NOSql: MongoDB, CrouchDB, etc
  */

  /**
   * Driver: SELECT * FROM USERS
   * Query Builder: table('users').select('*')
   */



