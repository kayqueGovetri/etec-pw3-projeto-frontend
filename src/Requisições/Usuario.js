var axios = require("axios");

function Login({email, senha}){

    console.log(email, senha);
    axios.post("https://pw3-etec-projeto-backend.herokuapp.com/login", {email: email, senha: senha}).then(function(data){
        console.log(data.data);
        localStorage.setItem('token', data.data.token)
     }).catch(function(error){
         console.log(error);
     });
}

export default Login;