import React, {useState} from 'react';
import CadastroAluno from '../Paginas/CadastroAluno.js'
import {
    Redirect, Link
  } from "react-router-dom";
  

// var axios = require("axios");
const CadastroAlunoView = () =>{

    return (
       <>
        <CadastroAluno/>
       </>
    );
}


export default CadastroAlunoView;
