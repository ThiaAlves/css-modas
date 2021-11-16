<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $guarded = [];

    public static function readProduto()
    {
        return Produto::orderBy('updated_at', 'desc')->paginate(5);
    }

    public static function createProduto($data)
    {
        return Produto::create([
            'produto' => $data['produto'],
            'foto' => $data['foto'],
            'descricao' => $data['descricao'],
            'valor' => $data['valor'],
            'empresa_id' => $data['empresa_id'],
            'categoria_id' => $data['categoria_id'],
        ]);
    }

    public static function updateProduto($data)
    {
        return Produto::where('id', $data['id'])->update([
            'produto' => $data['produto'],
            'foto' => $data['foto'],
            'descricao' => $data['descricao'],
            'valor' => $data['valor'],
            'empresa_id' => $data['empresa_id'],
            'categoria_id' => $data['categoria_id'],
        ]);
    }

    public static function deleteProduto($id)
    {
        return Produto::where('id', $id)->delete();        
    }

}
