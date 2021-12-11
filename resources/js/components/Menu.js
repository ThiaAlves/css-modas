import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Menu = () => {
    return(
            <div className="sidebar col-3">
            <div className="actionBtn pl-5 pr-5">
            <Link to="/cadCategoria"><button className="active"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Cadastro de Categorias</button></Link>
            <Link to="/cadEmpresa"><button className="active"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Cadastro de Empresa</button></Link>
            <Link to="/cadProduto"><button className="active"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Cadastro de Produto</button></Link>

            <Link to="/categorias"><button className="active"><FontAwesomeIcon icon="list" className="icon"/>Listagem de Categorias</button></Link>
            <Link to="/empresas"><button className="active"><FontAwesomeIcon icon="list" className="icon"/>Listagem de Empresas</button></Link>
            <Link to="/produtos"><button className="active"><FontAwesomeIcon icon="list" className="icon"/>Listagem de Produtos</button></Link>
                 </div>
             </div>
    )
}


export default Menu;