import React, { Component, Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const TotalCategorias = () => {


    const [countCategorias,getCountCategorias] = useState([]);

    useEffect(() => {
        axios.get('api/totalCategorias')
        .then((response) => {
            getCountCategorias(response.data);
        })
    },[]);

    return(

     <>
            {countCategorias.map((item,index) => 
        (
                <h3>{item.categorias}</h3>
        ))} 

     </>   
    )
}

export const TotalEmpresas = () => {


    const [countEmpresas,getCountEmpresas] = useState([]);

    useEffect(() => {
        axios.get('api/totalEmpresas')
        .then((response) => {
            getCountEmpresas(response.data);
        })
    },[]);

    return(

     <>
            {countEmpresas.map((item,index) => 
        (
                <h3>{item.empresas}</h3>
        ))} 

     </>   
    )
}

export const TotalProdutos = () => {


    const [countProdutos,getCountProdutos] = useState([]);

    useEffect(() => {
        axios.get('api/totalProdutos')
        .then((response) => {
            getCountProdutos(response.data);
        })
    },[]);

    return(

     <>
            {countProdutos.map((item,index) => 
        (
                <h3>{item.produtos}</h3>
        ))} 

     </>   
    )
}

export const ListaCategorias = () => {


    const [categorias,getCategorias] = useState([]);

    useEffect(() => {
        axios.get('api/categorias')
        .then((response) => {
            getCategorias(response.data.data);
        })
    },[]);

    return(

     <>
            
            {categorias.map((item,index) => 
        (
            <li className="dropdown-item"><Link to={"/categoria/"+item.id} className="linkMenu"><FontAwesomeIcon icon="tags" className="icon"/>{item.categoria}</Link></li>
        ))} 

     </>   
    )
}

export const ListaEmpresas = () => {


    const [empresas,getEmpresas] = useState([]);

    useEffect(() => {
        axios.get('api/empresas')
        .then((response) => {
            getEmpresas(response.data.data);
        })
    },[]);

    return(

     <>

        {empresas.map((item,index) => 
        (
            <li className="dropdown-item"><Link to={"/categoria/"+item.id} className="linkMenu"><FontAwesomeIcon icon="store-alt" className="icon"/>{item.empresa}</Link></li>

        ))} 

     </>   
    )
}




export default Categorias;