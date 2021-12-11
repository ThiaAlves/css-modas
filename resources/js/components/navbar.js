import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Axios from "axios";
import { ListaCategorias, ListaEmpresas } from "./Options";

const navbar = () => {
    return(
<div className="navbar navbar-expand-md navbarBg" role="navigation">
    <a className="navbar-brand" href="#">CSS MODAS</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><FontAwesomeIcon icon="bars" className="icon"/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/"><FontAwesomeIcon icon="home" className="icon"/> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Cadastros</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown1">
                    <li className="dropdown-item"><Link to="/cadCategoria" className="linkMenu"><FontAwesomeIcon icon="tags" className="icon"/>Cadastro de Categorias</Link></li>
                    <li className="dropdown-item"><Link to="/cadEmpresa" className="linkMenu"><FontAwesomeIcon icon="store-alt" className="icon"/>Cadastro de Empresa</Link></li>
                    <li className="dropdown-item"><Link to="/cadProduto" className="linkMenu"><FontAwesomeIcon icon="tshirt" className="icon"/>Cadastro de Produto</Link></li>

                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon="list" className="icon"/> Listagens</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown2">
                <li className="dropdown-item"><Link to="/categorias" className="linkMenu"><FontAwesomeIcon icon="tags" className="icon"/>Listagem de Categorias</Link></li>
                    <li className="dropdown-item"><Link to="/empresas" className="linkMenu"><FontAwesomeIcon icon="store-alt" className="icon"/>Listagem de Empresa</Link></li>
                    <li className="dropdown-item"><Link to="/produtos" className="linkMenu"><FontAwesomeIcon icon="tshirt" className="icon"/>Listagem de Produto</Link></li>
                </ul>
            </li>

            <li className="nav-item">
<<<<<<< HEAD
                <a className="nav-link" href="https://github.com/ThiaAlves/css-modas" target="_blank"><FontAwesomeIcon icon="share" className="icon"/>Acessar Loja</a>
=======
                <a className="nav-link" href="http://187.87.223.235:81" target="_blank"><FontAwesomeIcon icon="share" className="icon"/>Acessar Loja</a>
>>>>>>> parent of eae3cfc7 (Initial commit)
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/ThiaAlves/css-modas" target="_blank"><FontAwesomeIcon icon="share" className="icon"/> Github do Projeto</a>
            </li>
        </ul>

    </div>
</div>
    )
}

export default navbar;