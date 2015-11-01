<?php

$recepient = "codemode@ukr.net";
$sitename = "Code Mode";

$name = trim($_POST["user_name"]);
$email = trim($_POST["email"]);
$question = trim($_POST["question"]);
$message = "Имя: $name \nПочта: $email \nВопрос: $question";

$pagetitle = "Новый вопрос с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");