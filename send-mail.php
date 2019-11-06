<?php
$headers = 'From: contact@cwebdesign.ro' . "\r\n" .
    'Reply-To: contact@cwebdesign.ro' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail('catalin935@gmail.com', $_POST["nume"] . ' ' . $_POST["prenume"], $_POST["mesaj"], $headers);
?>