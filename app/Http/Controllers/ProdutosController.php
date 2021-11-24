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
            } else {
                echo "<script>console.log('Deu não')</script>";
            }
            return Produto::createProduto($request->input());
         } else {

         
            return Produto::updateProduto($request->input());
         }
    }

    public function destroy($id) {
        return Produto::deleteProduto($id);
    }
}
