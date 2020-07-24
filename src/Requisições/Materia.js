var axios = require("axios");

function Cadastrar({nome, semestre, especialidade, curso}){

    console.log(nome, semestre, especialidade, curso, localStorage.getItem('token'));
    axios.post("https://pw3-etec-projeto-backend.herokuapp.com/materia", 
    {nome, semestre, especialidade, curso},
    {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
    ).then(function(data){
        console.log(data.data);
     }).catch(function(error){
         console.log(error);
     });
}

export default Cadastrar
