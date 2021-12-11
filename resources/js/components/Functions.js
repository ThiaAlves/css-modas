

export const readDataCategoria = page_no => {
    let fetch_url = 'api/categorias';
    if(page_no) {
        fetch_url = fetch_url + '?page=' + page_no
    }
    return fetch(fetch_url, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => result.json())
    .catch(error => {
        console.log(error)
    });
}

export const insertDataCategoria = (input_data, is_edit) => {
    let method_type = 'post'
    if(is_edit) {
        method_type = 'put'
    }
    return fetch('api/categorias', {
        method: method_type,
        body: JSON.stringify(input_data),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}

export const deleteDataCategoria = id => {
    return fetch('api/categorias/'+id, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}



// Api empresa

export const readDataEmpresa = page_no => {
    let fetch_url = 'api/empresas';
    if(page_no) {
        fetch_url = fetch_url + '?page=' + page_no
    }
    return fetch(fetch_url, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => result.json())
    .catch(error => {
        console.log(error)
    });
}

export const insertDataEmpresa = (input_data, is_edit) => {
    let method_type = 'post'
    if(is_edit) {
        method_type = 'put'
    }
    return fetch('api/empresas', {
        method: method_type,
        body: JSON.stringify(input_data),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}

export const deleteDataEmpresa = id => {
    return fetch('api/empresas/'+id, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}


// Api produto

export const readDataProduto = page_no => {
    let fetch_url = 'api/produtos';
    if(page_no) {
        fetch_url = fetch_url + '?page=' + page_no
    }
    return fetch(fetch_url, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => result.json())
    .catch(error => {
        console.log(error)
    });
}

export const insertDataProduto = (input_data, is_edit) => {
    let method_type = 'post'
    if(is_edit) {
        method_type = 'put'
    } 
    return fetch('api/produtos', {
        method: method_type,
        body: JSON.stringify(input_data),
        headers: {
<<<<<<< HEAD
            'content-type': 'application/json'
=======
            'content-type': 'application/json',
            
>>>>>>> parent of eae3cfc7 (Initial commit)
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}

<<<<<<< HEAD
=======












>>>>>>> parent of eae3cfc7 (Initial commit)
export const deleteDataProduto = id => {
    return fetch('api/produtos/'+id, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}

export const formataValor = (valor) => {
    valor = parseFloat(valor);
    return valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}


export const retornaCategoria = () => {


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
                <option value={item.id}>{item.categoria}</option>
        ))} 

     </>   
    )
}