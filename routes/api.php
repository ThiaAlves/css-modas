<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    //Retorna um Status 200 e a mensagem "Back-end Challenge 2021 - Space Flight News
    return response()->json(['status' => '200', 'message' => 'Back-end Challenge 2021 🏅 - Space Flight News']);
});



Route::get('/articles/', 'ArticlesController@index'); //Lista todos os artigos da base de dados 
Route::get('/articles/{id}', 'ArticlesController@find'); //Obtem a informação de um artigo
Route::post('/articles', 'ArticlesController@store'); //Adiciona um novo artigo
Route::put('/articles/', 'ArticlesController@store'); //Atualiza o artigo baseado no id
Route::delete('/articles/{id}', 'ArticlesController@destroy'); //Remove um artigo baseado no id
