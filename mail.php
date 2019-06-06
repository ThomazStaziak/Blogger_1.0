<?php
    require("vendor/autoload.php");
    //include 'vendor/phpmailer/phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Username = '<SEU EMAIL>';
    $mail->Password = '<SUA SENHA>;
    $mail->Port = 587;

    $mail->setFrom('thostaziak@gmail.com');
    $mail->addReplyTo('thostaziak@gmail.com');
    $mail->addAddress($_REQUEST["email"], 'Thomaz');
    //$mail->addCC('email@email.com.br', 'Cópia');
    //$mail->addBCC('email@email.com.br', 'Cópia Oculta');

    $mail->isHTML(true);
    $mail->Subject = 'Hey Buddy!';
    $mail->Body    = file_get_contents('foundation/email-template.html');
    $mail->AltBody = 'To check this message click here http://google.com';
    //$mail->addAttachment('/tmp/image.jpg', 'nome.jpg');

    if (!$mail->send()) {
        echo "The email wasn't sendend.<br>";
        echo 'Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Email sendend.';
    }
?>
