<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriasController extends Controller
{
    public function index() {
        $Categorias = Categoria::readCategoria();
        return $Categorias;
    }

    public function store(Request $request) {
        if($request->isMethod('post'))
            return Categoria::createCategoria($request->input());
        else
            return Categoria::updateCategoria($request->input());
    }

    public function destroy($id) {
        return Categoria::deleteCategoria($id);
    }
    public function find($id) {
        $Categorias = Categoria::returnDetails($id);
        return $Categorias;
    }

    public function totalCategorias() {
        $Categorias = Categoria::totalCategorias();
        return $Categorias;
    }


}
