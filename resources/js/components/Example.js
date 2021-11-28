import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from "./footer";
import Categoria from "./Categoria";
import Empresa from "./Empresa";
import Produto from "./Produto";
import FormCategoria from "./FormCategoria";
import FormEmpresa from "./FormEmpresa";
import FormProduto from "./FormProduto";
import Navbar from "./navbar";
import Home from "./Home";
import "../../css/app.css";


function Example() {
    return (
        <Router>
        <Navbar />
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/cadCategoria"} component={FormCategoria} />
                <Route path={"/cadEmpresa"} component={FormEmpresa} />
                <Route path={"/cadProduto"} component={FormProduto} />


                <Route path={"/categorias"} component={Categoria} />
                <Route path={"/empresas"} component={Empresa} />
                <Route path={"/produtos"} component={Produto} />
            </Switch>
        <Footer />
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

