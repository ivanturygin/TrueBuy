<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';
require './phpmailer/src/Exception.php';

// Получение данных из формы
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$adds = $_POST['adds'];
$productDataJson = $_POST['productData'];

$productData = json_decode($productDataJson, true);

// Создание объекта PHPMailer
$mail = new PHPMailer(true);

try {
    // Настройки SMTP (замените на свои данные)
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'turyginkovrov@gmail.com';
    $mail->Password = 'treq oiiz khur gsja';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

        // Установка кодировки символов
    $mail->CharSet = 'UTF-8';

    // Отправка письма
    $mail->setFrom('turyginkovrov@gmail.com', 'TrueBuy');
    $mail->addAddress('turyginkovrov@gmail.com'); // Адрес получателя
    $mail->Subject = 'TrueBuy';

    // Тело письма
 $body = '<html><body>'.

            '<div style="margin-bottom: 15px;"><strong>Заказ №:</strong> ' . '</div>' .

            '<div style="margin-bottom: 10px;"><strong>Имя клиента:</strong> ' . $name . '</div>' .

            '<div style="margin-bottom: 10px;"><strong>Телефон:</strong> ' . $tel . '</div>' .

            '<div style="margin-bottom: 10px;"><strong>Email:</strong> ' . $email . '</div>' .

            '<div style="margin-bottom: 30px;"><strong>Адрес:</strong> ' . $adds . '</div>';

    // Добавление данных о продуктах в тело письма
    foreach ($productData as $product) {
        $body .= '<div style="margin-bottom: 10px;"><strong>ID товара:</strong> ' . $product['id'] . '</div>' .
                 '<div style="margin-bottom: 10px;"><strong>Наименование товара:</strong> ' . $product['title'] . '</div>' .
                '<div style="margin-bottom: 10px;"><strong>Цвет:</strong> ' . $product[''] . '</div>' .
                 '<div style="margin-bottom: 10px;"><strong>Количество:</strong> ' . $product['pcs'] . '</div>' .
                 '<div style="margin-bottom: 30px;"><strong>Цена:</strong> ' . $product['price'] . '</div>';
    }

    $body .= '</body></html>';

    $mail->msgHTML($body);
           
    $mail->send();
    
    // Ответ на запрос
    echo json_encode(['status' => 'success', 'message' => 'Сообщение успешно отправлено']);
} catch (Exception $e) {
    // Обработка ошибки
    echo json_encode(['status' => 'error', 'message' => 'Ошибка отправки сообщения: ' . $mail->ErrorInfo]);
}
?>