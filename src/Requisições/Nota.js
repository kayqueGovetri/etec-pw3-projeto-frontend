var axios = require("axios");

function Cadastrar({nota, _aluno, _aula}){

    console.log(nota, _aluno, _aula, localStorage.getItem('token'));
    axios.post("https://pw3-etec-projeto-backend.herokuapp.com/nota", 
    {nota, _aluno, _aula},
    {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
    ).then(function(data){
        console.log(data.data);
     }).catch(function(error){
         console.log(error);
     });
}

export default Cadastrar
