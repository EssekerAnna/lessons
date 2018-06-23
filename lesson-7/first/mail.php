<?php

$recepient = "essekeranna1@gmail.com";
$siteName = "Йога";

$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$message = "Почта: $mail \nТелефон: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>