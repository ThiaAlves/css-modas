import React, { Component, Fragment, useEffect, useState } from 'react';
import axios from 'axios';

export const Categorias = () => {


    const [categorias,getCategorias] = useState([]);

    useEffect(() => {
        axios.get('api/categorias')
        .then((response) => {
            getCategorias(response.data.data);
        })
    },[]);

    return(

     <>
                <option value="">Selecione</option>
            {categorias.map((item,index) => 
        (
                <option value={item.id}>{item.categoria}</option>
        ))} 

     </>   
    )
}

export const Empresas = () => {


    const [empresas,getEmpresas] = useState([]);

    useEffect(() => {
        axios.get('api/empresas')
        .then((response) => {
            getEmpresas(response.data.data);
        })
    },[]);

    return(

     <>

         <option value="">Selecione</option>
        {empresas.map((item,index) => 
        (
                <option value={item.id}>{item.empresa}</option>
        ))} 

     </>   
    )
}

export default Categorias;