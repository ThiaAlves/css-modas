import React, { Component, Fragment, useState } from 'react';
import {TotalCategorias, TotalProdutos, TotalEmpresas} from './Options';



export default class Home extends Component {


    render() {
        return (
            <div>
                <img className="" src="images/banner.jpeg" width="100%"></img>
<div className="container">
  <div className="row text-center pb-4">
    <div className="col-sm active">
      <p className="pt-1">Categorias Cadastradas</p>
      <p><TotalCategorias/> </p>

    </div>
    <div className="col-sm active">
    <p className="pt-1">Empresas Cadastradas</p>
      <p><TotalEmpresas/> </p>
    </div>
    <div className="col-sm active">
    <p className="pt-1">Produtos Cadastrados</p>
      <p><TotalProdutos/> </p>
    </div>
  </div>
</div>

</div>
         )
            }
        }
        