<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Rotas Api Para Categorias
Route::get('categorias', 'CategoriasController@index'); //Retorna detalhes da categoria
Route::post('categorias', 'CategoriasController@store'); //Cadastra a categoria
Route::put('categorias', 'CategoriasController@store'); //Atualiza a categoria
Route::delete('categorias/{id}', 'CategoriasController@destroy'); //Deleta a categoria
Route::get('categoria/{id}', 'CategoriasController@find'); //Encontra a Categoria Id
Route::get('totalCategorias', 'CategoriasController@totalCategorias'); //Conta quantas categorias estão cadastradas

//Rotas Api Para Empresas
Route::get('empresas', 'EmpresasController@index'); //Retorna detalhes da empresa
Route::post('empresas', 'EmpresasController@store'); //Cadastra a empresa
Route::put('empresas', 'EmpresasController@store'); // Atualiza a empresa
Route::delete('empresas/{id}', 'EmpresasController@destroy'); //Deleta a empresa
Route::get('empresa/{id}', 'EmpresasController@find'); // Encontra a empresa id
Route::get('totalEmpresas', 'EmpresasController@totalEmpresas'); // Conta quantas empresas estão cadastradas

//Rotas Api Para Produtos
Route::get('produtos', 'ProdutosController@index'); //Retorna Detalhes do produto
Route::post('produtos', 'ProdutosController@store'); //Cadastra o Produto
Route::put('produtos', 'ProdutosController@store'); //Atualiza o Produto
Route::delete('produtos/{id}', 'ProdutosController@destroy'); //Deleta o Produto
Route::get('produto/{id}', 'ProdutosController@find'); //Encontra o Produto id
Route::get('produtosCategoria/{id}', 'ProdutosController@findByCategoria'); //Encontra os Produtos da Categoria ID
Route::get('produtosEmpresa/{id}', 'ProdutosController@findByEmpresa'); //Encontra os Produtos da Categoria ID
Route::get('totalProdutos/', 'ProdutosController@totalProdutos'); //Soma de quantos produtos tem cadastrados



