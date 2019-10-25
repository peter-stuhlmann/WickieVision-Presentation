<?php
/*
 * Simple ContactForm
 * https://github.com/peter-stuhlmann/SimpleContactForm
 *
 * Copyright Peter R. Stuhlmann
 * Released under the MIT license
 * https://github.com/peter-stuhlmann/SimpleContactForm/blob/master/LICENSE
 *
 * Date: 2019-04-18 (updated: 2019-10-25)
 */
$sender = $_POST["E-Mail"];
$recipient = "*";
$mail_cc = "";
$subject = "WickieVision | Registrierung";
 
$url_sending_successfully = "https://wickievision.de/gesendet";
$url_sending_error = "https://wickievision.de/registrierung-error";
 
$ignore_fields = array('submit');
 
$weekday_name = array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
$weekday_num = date("w");
$weekday = $weekday_name[$weekday_num];
$year = date("Y");
$day = date("d");
$month = date("F");
$time = date("H:i");
 
$msg = "Datum/Uhrzeit der Registrierungsanfrage: $weekday, $month $day, $year - $time\n\nFolgende Daten wurden erfasst:\n\n";
foreach($_POST as $name => $value) {
  if (in_array($name, $ignore_fields)) {
    continue;
  }
  $msg .= "$name: $value\n";
}
 
$header = "From: $sender";
 
if (!empty($mail_cc)) {
  $header .= "\nCc: $mail_cc";
}
 
$header .= "\nContent-type: text/plain; charset=utf-8";
 
$send_message = mail($recipient,$subject,$msg,$header);
 
if($send_message){
  header("Location: ".$url_sending_successfully);
  exit();
} else{
  header("Location: ".$url_sending_error);
  exit();
}