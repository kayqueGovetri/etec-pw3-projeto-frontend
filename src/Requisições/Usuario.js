var axios = require("axios");

function Login({email, senha}){

    console.log(email, senha);
    axios.post("http://localhost:3001/login", {email: email, senha: senha}).then(function(data){
        console.log(data.data);
        localStorage.setItem('token', data.data.token)
     }).catch(function(error){
         console.log(error);
     });
}

export default Login;