import React, { Component, Fragment } from 'react';
import { readDataCategoria, insertDataCategoria, deleteDataCategoria } from './Functions';
import Menu from "./Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';

export default class categoria extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            categoria: '',
            editable: false,
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
        this.getData(this.state.next_page)
    }

    getData(page_url) {
        readDataCategoria(page_url)
        .then(promise => {
            this.setState({
                id: '',
                categoria: '',
                editable: false,
                categorias: [...promise.data],
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
            insertDataCategoria(input_data, this.state.editable)
            .then(() => {
                this.setState({
                    id: '',
                    categoria: '',
                    editable: false,
                    categorias: [],
                    prev_page: '',
                    next_page: '',
                    current_page: '',
                    last_page: ''
                })
                this.getData()
            })
            Swal.fire({
                title: 'Sucesso!',
                text: 'Categoria Cadastrada com sucesso!',
                icon: 'success',
                confirmButtonText: 'Fechar'
                
            })
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível cadastrar Categoria!',
                icon: 'error',
                confirmButtonText: 'Fechar'  
            })
        }
    }

    onCancel(event) {
        event.preventDefault()
        this.setState({
            categoria: '',
            editable: false
        })
    }

    validateData(input) {
        let data = Object.assign({}, input)
        delete data.id
        delete data.editable
        delete data.categorias
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
                    <h1 className="text-center pb-5">Cadastrar Categoria</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="form-group col-12 col-md-12">
                        <label for="categoria">Nome da categoria:</label>
                            <input type="text" className="form-control" name="categoria" maxLength="255" placeholder="Informe a categoria" value={this.state.categoria || ''} onChange={this.onChange}/>
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