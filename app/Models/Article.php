<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Article;

class Article extends Model
{
    use HasFactory;
    protected $fillable = ['featured', 'title', 'url', 'imageUrl', 'newsSite', 'summary', 'publishedAt'];

    public static function readArticle()
    {
        return Article::orderBy('id')
        ->paginate(50);
    }

    public static function createArticle($data)
    {
        return Article::create([
            'featured' => $data['featured'],
            'title' => $data['title'],
            'url' => $data['url'],
            'imageUrl' => $data['imageUrl'],
            'newsSite' => $data['newsSite'],
            'summary' => $data['summary'],
            'publishedAt' => $data['publishedAt'],
        ]);
    }

    public static function updateArticle($data)
    {
        return Article::where('id', $data['id'])->update([
            'featured' => $data['featured'],
            'title' => $data['title'],
            'url' => $data['url'],
            'imageUrl' => $data['imageUrl'],
            'newsSite' => $data['newsSite'],
            'summary' => $data['summary'],
            'publishedAt' => $data['publishedAt'],
        ]);
    }

    public static function returnDetails($id)
    {
        return Article::where('id', $id)->get();        
    }

    public static function deleteArticle($id)
    {
        return Article::where('id', $id)->delete();        
    }

}
