import React, { Component, Fragment, useEffect, useState } from 'react';
import { readDataProduto, insertDataProduto, deleteDataProduto } from './Functions';
import Menu from "./Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import axios from 'axios';
import {Categorias, Empresas} from './Options';



export default class produto extends Component  {
    constructor() {
        super()
        this.state = {
            id: '',
            produto: '',
            foto: '',
            descricao: '',
            valor: '',
            categoria_id: '',
            empresa_id: '',
            editable: false,
            produtos: [],
            prev_page: '',
            next_page: '',
            current_page: '',
            last_page: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onCancel = this.onCancel.bind(this)

    }
    
   
    componentDidMount() {
        this.getData(this.state.next_page)
    }

    getData(page_url) {
        readDataProduto(page_url)
        .then(promise => {
            this.setState({
                id: '',
                produto: '',
                foto: '',
                descricao: '',
                valor: '',
                categoria_id: '',
                empresa_id: '',
                editable: false,
                produtos: [...promise.data],
                prev_page: promise.prev_page_url,
                next_page: promise.next_page_url,
                current_page: promise.current_page,
                last_page: promise.last_page
            })
        })
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        let input_data = this.validateData(this.state)

        if(input_data) {
            input_data.id = this.state.id
            insertDataProduto(input_data, this.state.editable)
            .then(() => {
                this.setState({
                    id: '',
                    produto: '',
                    foto: '',
                    descricao: '',
                    valor: '',
                    categoria_id: '',
                    empresa_id: '',
                    editable: false,
                    produtos: [],
                    prev_page: '',
                    next_page: '',
                    current_page: '',
                    last_page: ''
                })
                this.getData()
            })
            Swal.fire({
                title: 'Sucesso!',
                text: 'Produto Cadastrada com sucesso!',
                icon: 'success',
                confirmButtonText: 'Fechar'
                
            })
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível cadastrar produto!',
                icon: 'error',
                confirmButtonText: 'Fechar'  
            })
            console.log(this.state);
        }
    }

    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                foto: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }



    onCancel(event) {
        event.preventDefault()
        this.setState({
            produto: '',
            editable: false
        })
    }

    validateData(input) {
        let data = Object.assign({}, input)
        delete data.id
        delete data.editable
        delete data.produtos
        delete data.prev_page
        delete data.next_page
        delete data.current_page
        delete data.last_page
        for(let i in data) {
            if(!data[i]) {
                return null
            }
        }
        return data
    }
    

    onlyNumber(event) {
        let key_code = event.which;
        if(key_code < 48 || key_code > 57) {
            event.preventDefault()
        }
        return
    }




    

    // ageValidate() {
    //     var idade = $('#idade').val();
    //     if(idade > 122 || idade < 3) {
    //         Swal.fire({
    //             title: 'Erro!',
    //             text: 'Idade Inválida!',
    //             icon: 'error',
    //             confirmButtonText: 'Fechar'
    //         })
    //         var idade = $('#idade').val('');
    //     }
    // }



    render() {

 
    
        return (
            <div className="layout row">

                <div className="actionDiv col-9">
                    <div className="Formdiv">
                    <h1 className="text-center pb-5">Cadastrar produto</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="form-group col-12 col-md-8">
                        <label for="produto">Nome da produto:</label>
                            <input type="text" className="form-control" name="produto" maxLength="255" placeholder="Informe a produto" value={this.state.produto || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-4">
                            <label for="foto">Foto:</label>
                            <input type="file" className="form-control" name="foto" maxLength="255" value={this.state.foto || ''} onChange={this.onChange}/>
                         </div> 

                            <Categorias/> 
                            {/* <input type="text" className="form-control" name="categoria_id" maxLength="255" placeholder="Informe a produto" value={this.state.categoria_id || ''} onChange={this.onChange}/> */}
                             <Empresas/>
                            {/* <input type="text" className="form-control" name="empresa_id" maxLength="255" placeholder="Informe a empresa" value={this.state.empresa_id || ''} onChange={this.onChange}/> */}
                         <div className="form-group col-12 col-md-4">
                            <label for="valor">Valor:</label>
                            <input type="number" className="form-control" name="valor" maxLength="255" value={this.state.valor || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-12">
                            <label for="descricao">Descrição:</label>
                            <input type="text" className="form-control" name="descricao" maxLength="255" placeholder="Informe a Descrição" value={this.state.descricao || ''} onChange={this.onChange}/>
                            {/* <input type="text" className="form-control" name="descricao" maxLength="255" value={this.state.descricao || ''} onChange={this.onChange}/> */}
                         </div> 
                                           
                    <div className="form-group col-12 col-md-12">
                   
                        </div>
                    <div className="form-group p-3">
                            <button type="submit" className="btn btn-success" name="save" onclick={this.onSubmit}><FontAwesomeIcon icon="check"  className="icon"/>Salvar</button>
                    </div>
                </div>
                </form>
              
                </div>
            </div>
           </div> 
        )
    }
}