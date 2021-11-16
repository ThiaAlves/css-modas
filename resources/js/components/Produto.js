import React, { Component, Fragment, useState } from 'react';
import { readDataProduto, insertDataProduto, deleteDataProduto } from './Functions';
import Menu from "./Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';



export default class produto extends Component {
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
            categorias: [],
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
        this.getData(this.state.next_page);

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
                text: 'Produto atualizada com sucesso!',
                icon: 'success',
                confirmButtonText: 'Fechar'
                
            }).then(function (){
                $('#editproduto').modal('hide');
            })
           
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível atualizar esse produto!',
                icon: 'error',
                confirmButtonText: 'Fechar'
                
            }).then(function (){
                $('#editproduto').modal('hide');
            })
        }
    }

    onEdit(event, index) {
        event.preventDefault()
        let produto = this.state.produtos[index]
        this.setState({
            id: produto.id,
            produto: produto.produto,
            editable: true
        })
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

    onDelete(event, index) {
        event.preventDefault()
        if(Swal.fire({
            title: 'Tem certeza?',
            text: 'A ação não pode ser desfeita',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, deletar',
            cancelButtonText: 'Cancelar'}).then((result) => {
                if(result.isConfirmed) {
                    Swal.fire('Excluído','Registro excluído com sucesso','success');
            deleteDataProduto(index)
            .then(() => {
                this.setState({
                    id: '',
                    produto: '',
                    editable: false,
                    produtos: [],
                    prev_page: '',
                    next_page: '',
                    current_page: '',
                    last_page: ''
                })
                this.getData()
            })
                    
                }
            } ) 
            );
            }

    onPaginate(event, url) {
        event.preventDefault()
        let page_no = url.split('?page=')
        this.getData(page_no[1])
    }

    onlyNumber(event) {
        let key_code = event.which;
        if(key_code < 48 || key_code > 57) {
            event.preventDefault()
        }
        return
    }





    render() {
        return (
            <div className="layout row">
            <Menu />
            <div className="actionDiv col-9">
            <div className="Formdiv">
            <h1 className="text-center pb-5">Listagem de Produtos</h1>
<div className="modal fade" id="editproduto" tabindex="-1" role="dialog" aria-labelledby="editprodutoLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="editprodutoLabel">Editar produto</h5>
        <button type="button" class="close btn btn-sm btn-outline-danger" data-dismiss="modal" aria-label="Close">
        <FontAwesomeIcon icon="times"  className="icon"/>
        </button>
      </div>
      <form onSubmit={this.onSubmit}>
                 <div className="modal-body">
                    <div className="row">
                        <div className="form-group col-12 col-md-8">
                        <label for="produto">Nome da produto:</label>
                            <input type="text" className="form-control" name="produto" maxLength="255" placeholder="Informe a produto" value={this.state.produto || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-4">
                            <label for="foto">Foto:</label>
                            <input type="file" className="form-control" name="foto" maxLength="255" value={this.state.foto || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-4">
                            <label for="categoria">Categoria:</label>
                            <input type="text" className="form-control" name="categoria" maxLength="255" value={this.state.categoria || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-4">
                            <label for="empresa">Empresa:</label>
                            <input type="text" className="form-control" name="empresa" maxLength="255" value={this.state.empresa || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-4">
                            <label for="valor">Valor:</label>
                            <input type="text" className="form-control" name="valor" maxLength="255" value={this.state.valor || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-12">
                            <label for="descricao">Descrição:</label>
                            <textarea name="descricao" rows="3" className="form-control"></textarea>
                            {/* <input type="text" className="form-control" name="descricao" maxLength="255" value={this.state.descricao || ''} onChange={this.onChange}/> */}
                         </div> 
                        </div>
               
                </div>
                <div className="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><FontAwesomeIcon icon="times"  className="icon"/>Cancelar</button>
                    <button type="submit" className="btn btn-success" name="update" onclick={this.onSubmit} ><FontAwesomeIcon icon="check"  className="icon"/>Atualizar</button>
                </div>
                </form>    
                </div>
            </div>
            </div>
                <table class="table table-hover" id="tableprodutos">
            <thead>
                <tr>
                <th scope="col" width="30%">Produto</th>
                <th scope="col" width="20%">Valor</th>
                <th scope="col" width="10%">Categoria</th>
                <th scope="col" width="20%">Empresa</th>
                <th scope="col" width="10%">Foto</th>
                <th scope="col" width="10%">Ações</th>
                </tr>
            </thead>
            <tbody>
                {this.state.produtos.map((produto, index) => {
                    return <tr key={index}>
                        <td>{produto.produto}</td>
                        <td>{produto.valor}</td>
                        <td>{produto.categoria}</td>
                        <td>{produto.empresa}</td>
                        <td>{produto.foto}</td>
                        <td>
                        <button type="button" className="btn btn-primary btn-sm p-1" data-toggle="modal" data-target="#editproduto" name="edit" onClick={(event) => this.onEdit(event, index)}><FontAwesomeIcon icon="pencil-alt"  className="icon"/></button>
                        <button type="button" className="btn btn-danger btn-sm p-1" name="delete" onClick={(event) => this.onDelete(event, produto.id)}><FontAwesomeIcon icon="trash-alt"  className="icon"/></button>
                           </td>
                       </tr>
               })}
           </tbody>
            </table>


                <button type="button" className="btn btn-secondary" onClick={(event) => this.onPaginate(event, this.state.prev_page)} disabled={!this.state.prev_page}><FontAwesomeIcon icon="arrow-left"  className="icon"/>Anterior</button>
                <label style={{margin: "0 10px"}}>Página {this.state.current_page} de {this.state.last_page}</label>
                <button type="button" className="btn btn-primary" onClick={(event) => this.onPaginate(event, this.state.next_page)} disabled={!this.state.next_page}>Próximo<FontAwesomeIcon icon="arrow-right"  className="icon"/></button>
                </div>
                </div>
                </div>
        )
    }
}