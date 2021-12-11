<?php

namespace Tests\Feature;

use App\ARTICLE;
use Illuminate\Http\Response;
use Tests\TestCase;

class ArticleTest extends TestCase
{

    public function testeCadastroSucesso()
    {
        $articleData = [
            "featured" => true,
            "title" => "Esse é o título da notícia",
            "url" => "https://google.com.br",
            "imageUrl" => "https://google.com.br/image.png",
            "newsSite" => "News Site Here",
            "summary" => "Lorem ipsum odoer",
            "publishedAt" => "2021-12-12"
        ];

        $this->json('POST', 'api/articles', $articleData, ['Accept' => 'application/json'])
            ->assertStatus(201)
            ->assertJsonStructure([
                    'id',
                    'featured',
                    'title',
                    'url',
                    'imageUrl',
                    'newsSite',
                    'summary',
                    'created_at',
                    'updated_at',
                
            ]);
    }
 
    public function testeRotaBase()
    {
        $this->json('GET', 'api/', ['Accept' => 'application/json'])
        ->assertStatus(200);
    }

    public function testeRetornoArtigos()
    {
        $this->json('GET', 'api/articles/', ['Accept' => 'application/json'])
        ->assertStatus(200);
    }
    
    public function testArticleIsDestroyed() {
    
        $articleData = [
            "id" => 99999,
            "featured" => true,
            "title" => "Esse é o título da notícia",
            "url" => "https://google.com.br",
            "imageUrl" => "https://google.com.br/image.png",
            "newsSite" => "News Site Here",
            "summary" => "Lorem ipsum odoer",
            "publishedAt" => "2021-12-12"
        ];
        
        $this->json('POST', 'api/articles', $articleData, ['Accept' => 'application/json'])
        ->assertStatus(201)
        ->assertJsonStructure([
                'id',
                'featured',
                'title',
                'url',
                'imageUrl',
                'newsSite',
                'summary',
                'created_at',
                'updated_at',
            
        ]);
        
        $this->json('delete', "api/articles/99999");
        $this->assertDatabaseMissing('articles', $articleData);
    }


    // public function testArticleUpdate() {
    
    //     $articleData = [
    //         "id" => 99999,
    //         "featured" => true,
    //         "title" => "Esse é o título da notícia",
    //         "url" => "https://google.com.br",
    //         "imageUrl" => "https://google.com.br/image.png",
    //         "newsSite" => "News Site Here",
    //         "summary" => "Lorem ipsum odoer",
    //         "publishedAt" => "2021-12-12"
    //     ];
        
    //     $this->json('POST', 'api/articles', $articleData, ['Accept' => 'application/json'])
    //     ->assertStatus(201)
    //     ->assertJsonStructure([
    //             'id',
    //             'featured',
    //             'title',
    //             'url',
    //             'imageUrl',
    //             'newsSite',
    //             'summary',
    //             'created_at',
    //             'updated_at',
            
    //     ]);
        

    //     $articleDataUpdate = [
    //         "id" => 99999,
    //         "featured" => true,
    //         "title" => "Esse é o título da notícia",
    //         "url" => "https://google.com.br",
    //         "imageUrl" => "https://google.com.br/image.png",
    //         "newsSite" => "News Site Here",
    //         "summary" => "Lorem ipsum odoer",
    //         "publishedAt" => "2021-12-12"
    //     ];
        
    //     $this->json('PUT', 'api/articles', $articleDataUpdate)
    //     ->assertStatus(RESPONSE::HTTP_OK)
    //     ->assertJsonStructure([
    //             'id',
    //             'featured',
    //             'title',
    //             'url',
    //             'imageUrl',
    //             'newsSite',
    //             'summary',
    //             'created_at',
    //             'updated_at',
            
    //     ]);

    // }

}