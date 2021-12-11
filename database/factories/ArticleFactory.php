<?php

namespace Database\Factories;


use App\ARTICLE;
use Faker\Generator as Faker;

$factory->define(ARTICLE::class, function (Faker $faker) {
    return [
        'featured' => $faker->featured,
        'title' => $faker->title,
        'url' => $faker->url,
        'imageUrl' => $faker->imageUrl,
        'newsSite' => $faker->newsSite,
        'summary' => $faker->summary,
        'publishedAt' => $faker->publishedAt,
    ];
});