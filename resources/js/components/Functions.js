

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

