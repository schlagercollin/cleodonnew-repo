<?php
$gcalLink = $_POST['googleCalendarLink'];
//define the receiver of the email
$to = $_POST['email'];
//define the subject of the email
$subject = $_POST['title'];
//define the message to be sent. Each line should be separated with \n
$message = "Thank you for schedling your appoitment!\nWe will get back to you soon.\nClick this link to download an iCal file\nClick this link to add this appointment to you Google Calendar. $gcalLink";
//define the headers we want passed. Note that they are separated with \r\n
$headers = "From: khaled@mtndogmedia.com\r\nReply-To: khaled@mtndogmedia.com";
//send the email
$mail_sent = @mail( $to, $subject, $message, $headers );
//if the message is sent successfully print "Mail sent". Otherwise print "Mail failed"
echo $mail_sent ? "Mail sent" : "Mail failed";
?>

<h1>This is the mail confirmation page</h1>
