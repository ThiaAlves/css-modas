<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;

class ArticleCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'article:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Salva todos os dados da Api pública no Banco de Dados';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
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
        
        return Command::SUCCESS;
    }
}
