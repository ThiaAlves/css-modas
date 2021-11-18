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
        <div className="form-group col-12 col-md-4">
        <label for="categoria_id">Categoria:</label>  
         <select name="categoria_id" id="categoria_id" className="form-control">
        {categorias.map((item,index) => 
        (
                <option value={item.id}>{item.categoria}</option>
        ))} 
        </select>
     </div>
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
        <div className="form-group col-12 col-md-4">
        <label for="empresa_id">Empresa:</label>  
         <select name="empresa_id" id="empresa_id" className="form-control">
        {empresas.map((item,index) => 
        (
                <option value={item.id}>{item.empresa}</option>
        ))} 
        </select>
     </div>
     </>   
    )
}

export default Categorias;