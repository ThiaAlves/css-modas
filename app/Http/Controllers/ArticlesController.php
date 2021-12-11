<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

/**
 * @OA\Get(
 *     path="/projects",
 *     @OA\Response(response="200", description="Display a listing of projects.")
 * )
 */

class ArticlesController extends Controller
{
    public function index() {
        $Articles = Article::readArticle();
        return $Articles;
    }

    public function store(Request $request) {
        if($request->isMethod('post')) {

            return Article::createArticle($request->input());
         } else {

         
            return Article::updateArticle($request->input());
         }
    }

    public function destroy($id) {
        return Article::deleteArticle($id);
    }

    public function find($id) {
        $Articles = Article::returnDetails($id);
        return $Articles;
    }

}