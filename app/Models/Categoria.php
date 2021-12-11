<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $guarded = [];

    public static function readCategoria()
    {
        return Categoria::orderBy('updated_at', 'desc')->paginate(1000);
    }

    public static function createCategoria($data)
    {
        return Categoria::create([
            'categoria' => $data['categoria'],
        ]);
    }

    public static function updateCategoria($data)
    {
        return Categoria::where('id', $data['id'])->update([
            'categoria' => $data['categoria'],
        ]);
    }

    public static function deleteCategoria($id)
    {
        return Categoria::where('id', $id)->delete();        
    }

    public static function returnDetails($id)
    {
        return Categoria::where('id', $id)->get();        
    }

    public static function totalCategorias()
    {
        return Categoria::selectRaw('count(*) as categorias')->get();
    }
}
