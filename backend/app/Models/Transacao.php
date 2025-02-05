<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    use HasFactory;

    protected $table = 'transacoes';

    // => Definindo os campos permitidos para inserção
    protected $fillable = [
        'descricao',
        'valor',
        'tipo',
        'categoria_id',
        'data_transacao'
    ];

    public $timestamps = false;

    public function categoria() {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }
}
