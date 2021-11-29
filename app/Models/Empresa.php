<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    protected $guarded = [];

    public static function readEmpresa()
    {
        return Empresa::orderBy('empresas.updated_at', 'desc')
        ->paginate(1000);
    }

    public static function createEmpresa($data)
    {
        return Empresa::create([
            'empresa' => $data['empresa'],
            'whatsapp' => $data['whatsapp'],
        ]);
    }

    public static function updateEmpresa($data)
    {
        return Empresa::where('id', $data['id'])->update([
            'empresa' => $data['empresa'],
            'whatsapp' => $data['whatsapp'],
        ]);
    }

    public static function deleteEmpresa($id)
    {
        return Empresa::where('id', $id)->delete();        
    }

    public static function returnDetails($id)
    {
        return Empresa::where('id', $id)->get();        
    }

    public static function totalEmpresas()
    {
        return Empresa::selectRaw('count(*) as empresas')->get();
    }
}
