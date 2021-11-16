<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;
use App\Models\Categoria;

class ProdutosController extends Controller
{
    public function index() {
        $Produtos = Produto::readProduto();
        return $Produtos;
    }

    public function store(Request $request) {
        if($request->isMethod('post')) 
            return Produto::createProduto($request->input());
        else
            return Produto::updateProduto($request->input());
    }

    public function destroy($id) {
        return Produto::deleteProduto($id);
    }
}
