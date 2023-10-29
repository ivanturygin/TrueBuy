<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';
require './phpmailer/src/Exception.php';

// Проверяем, были ли получены данные через POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mail = new PHPMailer(true);

    try {
        // Настройки сервера SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Замените на адрес вашего SMTP-сервера
        $mail->SMTPAuth = true;
        $mail->Username = 'turyginkovrov@gmail.com'; // Замените на ваше имя пользователя SMTP
        $mail->Password = 'treq oiiz khur gsja'; // Замените на ваш пароль SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Используйте PHPMailer::ENCRYPTION_SMTPS, если требуется SSL
        $mail->Port = 587; // Порт для STARTTLS (или 465 для SMTPS)

        // Получение данных из POST-запроса
        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $email = $_POST['email'];
		  $adds = $_POST['adds'];

        // Отправитель и получатель
        $mail->setFrom('turyginkovrov@gmail.com', 'Your Name');
        $mail->addAddress($email); // Используем введенный email как адрес получателя

        // Тело письма
        $mail->isHTML(true);
        $mail->Subject = $name;
        $mail->Body = $emale;

        // Отправка письма
        $mail->send();
        echo 'Письмо успешно отправлено';
    } catch (Exception $e) {
        echo 'Сообщение не было отправлено. Причина ошибки: ' . $mail->ErrorInfo;
    }
} else {
    echo 'Данные не получены';
}
?>