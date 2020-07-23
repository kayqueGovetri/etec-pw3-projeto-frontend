var axios = require("axios");

class TurmaReq{

     Cadastrar({curso, semestre, _aulas}){

        console.log(curso, semestre, _aulas, localStorage.getItem('token'));
        axios.post("http://localhost:3001/turma", 
        {curso, semestre, _aulas, _alunos: []},
        {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
        ).then(function(data){
            console.log(data.data);
         }).catch(function(error){
             console.log(error);
         });
    }

     

    
}


export default TurmaReq
