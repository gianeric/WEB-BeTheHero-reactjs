const express = require ('express'); //constante express recebe todos os dados de do framework express
const app = express(); //instanciar constante express

app.get('/', (request,response) => {
  //return response.send("Hello Word");
  return response.json({
      evento: 'Semana OmniStack',
      aluno: 'Gian Eric' 
})
}); 

app.listen(3333); //ouvir a porta 3333

