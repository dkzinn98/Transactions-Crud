<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;


class RouteServiceProvider extends ServiceProvider {
    protected $namespace = 'App\Http\Controllers'; // Namespace do meu controllet

    public const HOME = '/home'; // Caminho padrão

    public function map() { // Registrando as rotas da aplic
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

// Abaixo as Rotas da API:
    protected function mapApiRoutes() {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }


    protected function mapWebRoutes() {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }

}
