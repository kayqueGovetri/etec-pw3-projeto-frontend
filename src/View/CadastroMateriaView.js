import React, {useState} from 'react';
import CadastroMateria from '../Paginas/CadastroMateria.js'
import {
    Redirect, Link
  } from "react-router-dom";
  

// var axios = require("axios");
const CadastroMateriaView = () =>{

    return (
       <>
        <CadastroMateria/>
       </>
    );
}


export default CadastroMateriaView;
