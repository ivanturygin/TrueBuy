<?php

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';


// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$tel = $_POST['tel'];
$emale = $_POST['emale'];
$adds = $_POST['adds'];

// Формирование самого письма
$title = "Заказ TrueBuy";
$body = "
<h2>Новый заказ</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $tel<br>
<b>Почта:</b> $email<br><br>
<b>Адрес:</b> $adds<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'turyginkovrov@gmail.com'; // Логин на почте
    $mail->Password   = 'treq oiiz khur gsja'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('turyginkovrov@gmail.com', 'TrueBuy'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('turygin.i@yandex.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);