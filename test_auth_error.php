<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$request = Illuminate\Http\Request::create('/api/logout', 'POST');
$request->headers->set('Accept', 'application/json');

try {
    $response = $kernel->handle($request);
    echo $response->getContent();
} catch (\Throwable $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    echo $e->getTraceAsString();
}
