<?php
/**
 * Created by PhpStorm.
 * User: Video
 * Date: 08.10.2015
 * Time: 18:49
 */

if (isset($_GET)) {
    $phoneNum = trim(htmlspecialchars($_GET['phoneNum']));
    $name = trim(htmlspecialchars($_GET['name']));

    $message = 'Номер телефона: ' . $phoneNum . '<br>';
    $message .= 'Имя: ' . $name . '<br>';

    $to = 'info@wave.com.ua';

    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: <callback@wave.com.ua>' . "\r\n";

    mail($to, 'Перезвоните мне ' . $phoneNum, $message, $headers);
}