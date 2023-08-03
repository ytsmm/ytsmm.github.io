<?php
if (isset($_POST['form_btn']))
{
	if (isset($_POST['name'])) {$phone = $_POST['name'];}
	if (isset($_POST['email'])) {$name = $_POST['email'];}
	if (isset($_POST['message'])) {$name = $_POST['message'];}
	$myaddres  = "yulyahp@gmail.com";
	$mes = "Сообщение: $message\nИмя: $name\n E-mail: $email";
	$sub='Письмо с сайта';
	$email='Обратная связь';
	$send = mail($myaddres,$sub,$mes);
	echo 'Email Sent';
}
?>
