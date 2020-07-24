var axios = require("axios");

class ProfessorReq{

     Cadastrar({nome, dataNascimento, email, especialidade}){

        console.log(nome, dataNascimento, email, localStorage.getItem('token'));
        axios.post("http://localhost:3001/professor", 
        {nome, dataNascimento, email, especialidade, senha:"123"},
        {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
        ).then(function(data){
            console.log(data.data);
         }).catch(function(error){
             console.log(error);
         });
    }

     async GetProfessores(){
        // axios.get("http://localhost:3001/professores", {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}).then(function(data){
        //     return (data.data);
        // }).catch(function(error){
        //     console.log(error.data)
        // });
        await axios.get('http://localhost:3001/professores', { headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`} }); 

    }
}


export default ProfessorReq
