var axios = require("axios");

function Cadastrar({nome, telefone, rm, dataNascimento, dataMatricula, cep, cpfResponsavel, email, _turma}){

    console.log(nome, telefone, rm, dataNascimento, dataMatricula, cep, cpfResponsavel, email, localStorage.getItem('token'));
    axios.post("https://pw3-etec-projeto-backend.herokuapp.com/aluno", 
    {nome, telefone, rm, dataNascimento, dataMatricula, cep, cpfResponsavel, email, senha:"123", _turma},
    {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
    ).then(function(data){
        console.log(data.data);
     }).catch(function(error){
         console.log(error);
     });
}

export default Cadastrar
