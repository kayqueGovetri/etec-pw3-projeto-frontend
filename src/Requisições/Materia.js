var axios = require("axios");

function Cadastrar({nome, semestre, especialidade, curso}){

    console.log(nome, semestre, especialidade, curso, localStorage.getItem('token'));
    axios.post("http://localhost:3001/materia", 
    {nome, semestre, especialidade, curso},
    {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
    ).then(function(data){
        console.log(data.data);
     }).catch(function(error){
         console.log(error);
     });
}

export default Cadastrar
