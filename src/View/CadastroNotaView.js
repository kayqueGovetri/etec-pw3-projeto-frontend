import React, {useState} from 'react';
import CadastroNota from '../Paginas/CadastroNota.js'
import {
    Redirect, Link
  } from "react-router-dom";
  

// var axios = require("axios");
const CadastroNotaView = () =>{

    return (
       <>
        <CadastroNota/>
       </>
    );
}


export default CadastroNotaView;
