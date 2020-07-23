var axios = require("axios");

class AulaReq{

     Cadastrar({cargaHoraria, _professor, _materia}){

        console.log(cargaHoraria, _professor, _materia, localStorage.getItem('token'));
        axios.post("https://pw3-etec-projeto-backend.herokuapp.com/aula", 
        {cargaHoraria, _professor, _materia},
        {headers:  { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
        ).then(function(data){
            console.log(data.data);
         }).catch(function(error){
             console.log(error);
         });
    }

     

    
}


export default AulaReq
