var axios = require("axios");

function Login({email, senha}){

    console.log(email, senha);
    axios.post("http://localhost:8080/login", {email: email, senha: senha}).then(function(data){
        console.log(data.data);
     }).catch(function(error){
         console.log(error);
     });
}

// function Cadastrar({email, senha}){

//     console.log(email, senha);

//     axios.post("https://pw3-etec-projeto-backend.herokuapp.com/usuario", {email: email, senha:senha, roles:[]}).then(function(data){
//         console.log(data.data);
//      }).catch(function(error){
//          console.log(error);
//      });;
// // }
// event.preventDefault();
// console.log(this.state.email, this.state.senha);
// axios.post("http://localhost:3001/login", 
// {
//     data:
//         {
//             email: this.state.email,
//             senha: this.state.senha,
//         }
// }, {headers: {"Access-Control-Allow-Origin": "*",  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 'Content-Type': 'application/x-www-form-urlencoded'}}).then(function(data){
//     console.log(data.data);
//  }).catch(function(error){
//      console.log(error);
//  });

export default Login;