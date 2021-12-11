<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $guarded = [];

    public static function readProduto()
    {
        return Produto::orderBy('produtos.updated_at', 'desc')
        ->join('empresas', 'empresas.id', '=', 'produtos.empresa_id')
        ->join('categorias', 'categorias.id', '=', 'produtos.categoria_id')
        ->select('produtos.id', 'produtos.produto', 'produtos.foto', 'produtos.valor',
        'produtos.promo', 'produtos.descricao', 'categorias.categoria', 
        'empresas.empresa', 'empresas.whatsapp')
        ->paginate(1000);
    }

    public static function createProduto($data)
    {
        return Produto::create([
            'produto' => $data['produto'],
            'foto' => $data['foto'],
            'descricao' => $data['descricao'],
            'valor' => $data['valor'],
            'promo' => $data['promo'],
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
            'promo' => $data['promo'],
            'empresa_id' => $data['empresa_id'],
            'categoria_id' => $data['categoria_id'],
        ]);
    }

    public static function deleteProduto($id)
    {
        return Produto::where('id', $id)->delete();        
    }

    public static function returnDetails($id)
    {
        return Produto::where('id', $id)->get();        
    }

    public static function readProdutoByCategoria($id)
    {
        return Produto::orderBy('produtos.updated_at', 'desc')
        ->join('empresas', 'empresas.id', '=', 'produtos.empresa_id')
        ->join('categorias', 'categorias.id', '=', 'produtos.categoria_id')
        ->select('produtos.id', 'produtos.produto', 'produtos.foto', 'produtos.valor',
        'produtos.promo', 'produtos.descricao', 'categorias.categoria', 
        'empresas.empresa', 'empresas.whatsapp')
        ->where('categorias.id', $id)
        ->get();
    }

    public static function readProdutoByEmpresa($id)
    {
        return Produto::orderBy('produtos.updated_at', 'desc')
        ->join('empresas', 'empresas.id', '=', 'produtos.empresa_id')
        ->join('categorias', 'categorias.id', '=', 'produtos.categoria_id')
        ->select('produtos.id', 'produtos.produto', 'produtos.foto', 'produtos.valor',
        'produtos.promo', 'produtos.descricao', 'categorias.categoria', 
        'empresas.empresa', 'empresas.whatsapp')
        ->where('empresas.id', $id)
        ->paginate(1000);
    }

    public static function totalProdutos()
    {
        return Produto::selectRaw('count(*) as produtos')->get();
    }


}
