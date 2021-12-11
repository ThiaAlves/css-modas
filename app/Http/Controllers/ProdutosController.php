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
        if($request->isMethod('post')) {

            if($request->get('file')) {
                $image = $request->get('file');
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                \Image::make($request->get('file', ))->save(public_path('images/').$name);
            } 

            return Produto::createProduto($request->input());
         } else {

         
            return Produto::updateProduto($request->input());
         }
    }

    public function destroy($id) {
        return Produto::deleteProduto($id);
    }

    public function find($id) {
        $Produtos = Produto::returnDetails($id);
        return $Produtos;
    }

    public function findByCategoria($id) {
        $Produtos = Produto::readProdutoByCategoria($id);
        return $Produtos;
    }

    public function findByEmpresa($id) {
        $Produtos = Produto::readProdutoByEmpresa($id);
        return $Produtos;
    }

    public function totalProdutos() {
        $Produtos = Produto::totalProdutos();
        return $Produtos;
    }
}

