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
Route::get('categorias', 'CategoriasController@index');
Route::post('categorias', 'CategoriasController@store');
Route::put('categorias', 'CategoriasController@store');
Route::delete('categorias/{id}', 'CategoriasController@destroy');
Route::get('categoria/{id}', 'CategoriasController@find');

//Rotas Api Para Empresas
Route::get('empresas', 'EmpresasController@index');
Route::post('empresas', 'EmpresasController@store');
Route::put('empresas', 'EmpresasController@store');
Route::delete('empresas/{id}', 'EmpresasController@destroy');
Route::get('empresa/{id}', 'EmpresasController@find');

//Rotas Api Para Produtos
Route::get('produtos', 'ProdutosController@index');
Route::post('produtos', 'ProdutosController@store');
Route::put('produtos', 'ProdutosController@store');
Route::delete('produtos/{id}', 'ProdutosController@destroy');
Route::get('produto/{id}', 'ProdutosController@find');
