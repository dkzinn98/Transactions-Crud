<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransacaoController;
use App\Http\Controllers\CategoriaController;

// => Abaixo irei verificar se a API está funcional

Route::get('/teste', function () {
    return response()->json(['message' => 'Rota da API funcional! 👨🏻‍💻']);
});

Route::get('/categorias', [CategoriaController::class, 'index']);

// => Abaixo irei criar rotas da API para transações

Route::apiResource('transacoes', TransacaoController::class);
