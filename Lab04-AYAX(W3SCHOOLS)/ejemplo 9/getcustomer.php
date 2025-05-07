<?php
// Configurar el tipo de contenido como HTML
header('Content-Type: text/html');

// Datos de los clientes en formato array asociativo
$customers = [
    "ALFKI" => [
        "CompanyName" => "Alfreds Futterkiste",
        "ContactName" => "Maria Anders",
        "Address" => "Obere Str. 57",
        "City" => "Berlin",
        "PostalCode" => "12209",
        "Country" => "Germany"
    ],
    "NORTS" => [
        "CompanyName" => "North/South",
        "ContactName" => "Simon Crowther",
        "Address" => "South House 300 Queensbridge",
        "City" => "London",
        "PostalCode" => "SW7 1RZ",
        "Country" => "UK"
    ],
    "WOLZA" => [
        "CompanyName" => "Wolski Zajazd",
        "ContactName" => "Zbyszek Piestrzeniewicz",
        "Address" => "ul. Filtrowa 68",
        "City" => "Warszawa",
        "PostalCode" => "01-012",
        "Country" => "Poland"
    ]
];

// Obtener el ID del cliente
$customer_id = trim($_GET['q'] ?? '');
$customer = $customers[$customer_id] ?? null;

if ($customer) {
    // Generar la tabla HTML
    $html = '<table>';
    $html .= '<tr><th>CustomerID</th><td>'.$customer_id.'</td></tr>';
    
    foreach ($customer as $key => $value) {
        $html .= '<tr><th>'.$key.'</th><td>'.$value.'</td></tr>';
    }
    
    $html .= '</table>';
    echo $html;
} else {
    echo "<p>Cliente no encontrado</p>";
}
?>