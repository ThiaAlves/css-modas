<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;

class ArticlesTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $client = new Client();
        $articleQuery = $client->get('https://api.spaceflightnewsapi.net/v3/articles');
        $articles = $articleQuery->getBody();
        $articles = json_decode($articles, true);

        foreach ($articles as $article) {
            DB::table('articles')->insert([
                'title' => $article['title'],
                'featured' => $article['featured'],
                'url' => $article['url'],
                'imageUrl' => $article['imageUrl'],
                'newsSite' => $article['newsSite'],
                'summary' => $article['summary'],
                'publishedAt' => $article['publishedAt'],
               
            ]);
        }
    }
}
