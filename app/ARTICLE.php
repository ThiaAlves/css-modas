<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CEO extends Model
{
    protected $fillable = [
        'featured', 'title', 'url', 'imageUrl', 'newsSite', 'summary', 'publishedAt'
    ];
}