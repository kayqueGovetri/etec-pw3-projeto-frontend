var axios = require("axios");

//  axios.post("http://localhost:3000/usuario", {email: "teste2@teste.com", senha:"teste123", roles:[]}).then(function(data){
//     console.log(data.data);
//  }).catch(function(error){
//      console.log(error);
//  });;

 axios.post("http://localhost:3001/login", {email: "teste2@teste.com", senha:"teste123"}).then(function(data){
    console.log(data.data);
 }).catch(function(error){
     console.log(error);
 });;