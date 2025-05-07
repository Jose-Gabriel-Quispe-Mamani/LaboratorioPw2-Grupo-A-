<?php
// Array con nombres de ejemplo
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
// ... añade más nombres

// Obtener el parámetro q de la URL
$q = $_REQUEST["q"];

$hint = "";

// Buscar coincidencias si q no está vacío
if ($q !== "") {
  $q = strtolower($q);
  $len = strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Mostrar "no suggestion" si no hay coincidencias
echo $hint === "" ? "no suggestion" : $hint;
?>