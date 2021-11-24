import React, { Component, Fragment, useState } from 'react';
import { readDataEmpresa, insertDataEmpresa, deleteDataEmpresa } from './Functions';
import Menu from "./Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';



export default class empresa extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            empresa: '',
            whatsapp: '',
            editable: false,
            empresas: [],
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
        readDataEmpresa(page_url)
        .then(promise => {
            this.setState({
                id: '',
                empresa: '',
                whatsapp: '',
                editable: false,
                empresas: [...promise.data],
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
            insertDataEmpresa(input_data, this.state.editable)
            .then(() => {
                this.setState({
                    id: '',
                    empresa: '',
                    whatsapp: '',
                    editable: false,
                    empresas: [],
                    prev_page: '',
                    next_page: '',
                    current_page: '',
                    last_page: ''
                })
                this.getData()
            })
            Swal.fire({
                title: 'Sucesso!',
                text: 'Empresa atualizada com sucesso!',
                icon: 'success',
                confirmButtonText: 'Fechar'
                
            }).then(function (){
                $('#editempresa').modal('hide');
            })
           
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível atualizar essa empresa!',
                icon: 'error',
                confirmButtonText: 'Fechar'
                
            }).then(function (){
                $('#editempresa').modal('hide');
            })
        }
    }

    onEdit(event, index) {
        event.preventDefault()
        let empresa = this.state.empresas[index]
        this.setState({
            id: empresa.id,
            empresa: empresa.empresa,
            whatsapp: empresa.whatsapp,
            editable: true
        })
    }

    onCancel(event) {
        event.preventDefault()
        this.setState({
            empresa: '',
            whatsapp: '',
            editable: false
        })
    }

    validateData(input) {
        let data = Object.assign({}, input)
        delete data.id
        delete data.editable
        delete data.empresas
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
            deleteDataEmpresa(index)
            .then(() => {
                this.setState({
                    id: '',
                    empresa: '',
                    whatsapp: '',
                    editable: false,
                    empresas: [],
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

             <div className="actionDiv col-9">
                 <div className="Formdiv">
                     <h1 className="text-center pb-5">Cadastrar empresa</h1>
                 <form onSubmit={this.onSubmit}>
                     <div className="row">
                         <div className="form-group col-12 col-md-12">
                             <label for="empresa">Nome da empresa:</label>
                              <input type="text" className="form-control" name="empresa" maxLength="255" placeholder="Informe a empresa" value={this.state.empresa || ''} onChange={this.onChange}/>
                         </div> 
                          <div className="form-group col-12 col-md-12">
                           <label for="empresa">Whatsapp da empresa:</label>
                           <input type="text" className="form-control" name="whatsapp" maxLength="255" placeholder="Informe o número" value={this.state.whatsapp || ''} onChange={this.onChange}/>
                          </div> 
                          <div className="form-group col-12 col-md-12">
                       </div>
               <div className="form-group p-3">
                 <button type="submit" className="btn btn-success" name="save" onclick={this.onSubmit}><FontAwesomeIcon icon="check" className="icon"/>Salvar</button>
                 </div>
                 </div>
                 </form> 
                 </div>
               </div>
              </div> 
         )
            }
        }
        