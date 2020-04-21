const express = require('express'); //constante express recebe todos os dados de do framework express
const routes = express.Router();

routes.post('/users', (request,response) => {
    const body = request.body;
  
    console.log(body);
  
    //return response.send("Hello Word");
    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Gian Eric' 
  })
  });

module.exports = routes;