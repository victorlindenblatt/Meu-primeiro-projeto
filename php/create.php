<?php
    $nome = $_GET["nome"];
    $email = $_GET["email"];
    $celular = $_GET["celular"];
    $mensagem = $_GET["mensagem"];

    $pdo = new PDO('mysql:host=localhost;dbname=meusite;charset=utf8', 'root', '');

    $stmt = $pdo->prepare("INSERT INTO faleconosco (nome, email, celular, mensagem)
    VALUES (?, ?, ?, ?);");
    $stmt->bindParam(1, $nome);
    $stmt->bindParam(2, $email);
    $stmt->bindParam(3, $celular);
    $stmt->bindParam(4, $mensagem);
    $stmt->execute();

echo "Usuário inserido..."
?>

