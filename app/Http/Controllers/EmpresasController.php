<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empresa;

class EmpresasController extends Controller
{
    public function index() {
        $Empresas = Empresa::readEmpresa();
        return $Empresas;
    }

    public function store(Request $request) {
        if($request->isMethod('post'))
            return Empresa::createEmpresa($request->input());
        else
            return Empresa::updateEmpresa($request->input());
    }

    public function destroy($id) {
        return Empresa::deleteEmpresa($id);
    }

    public function find($id) {
        $Empresas = Empresa::returnDetails($id);
        return $Empresas;
    }
}