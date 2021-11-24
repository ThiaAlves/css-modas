import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const navbar = () => {
    return(
<div class="navbar navbar-expand-md navbarBg mb-4" role="navigation">
    <a class="navbar-brand" href="#">CSS MODAS</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><FontAwesomeIcon icon="bars" className="icon"/></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#"><FontAwesomeIcon icon="home" className="icon"/> Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Cadastros</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown1">
                    <li class="dropdown-item"><Link to="/cadCategoria" className="linkMenu"><FontAwesomeIcon icon="tags" className="icon"/>Cadastro de Categorias</Link></li>
                    <li class="dropdown-item"><Link to="/cadEmpresa" className="linkMenu"><FontAwesomeIcon icon="store-alt" className="icon"/>Cadastro de Empresa</Link></li>
                    <li class="dropdown-item"><Link to="/cadProduto" className="linkMenu"><FontAwesomeIcon icon="tshirt" className="icon"/>Cadastro de Produto</Link></li>

                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon="list" className="icon"/> Listagens</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown2">
                <li class="dropdown-item"><Link to="/categorias" className="linkMenu"><FontAwesomeIcon icon="tags" className="icon"/>Listagem de Categorias</Link></li>
                    <li class="dropdown-item"><Link to="/empresas" className="linkMenu"><FontAwesomeIcon icon="store-alt" className="icon"/>Listagem de Empresa</Link></li>
                    <li class="dropdown-item"><Link to="/produtos" className="linkMenu"><FontAwesomeIcon icon="tshirt" className="icon"/>Listagem de Produto</Link></li>
                    
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/ThiaAlves/css-modas" target="_blank"><FontAwesomeIcon icon="share" className="icon"/> Github do Projeto</a>
            </li>
        </ul>

    </div>
</div>
    )
}

export default navbar;