<?php 

$to = "tarekmonjur@gmail.com";
$subject = "Personal Mail Contact";

$message = "
<html>
<head>
<title>tarek monjur</title>
</head>
<body>
Hi
I am <strong>".$_POST['name']."</strong>
<h5>".$_POST['message']."</h5>
<h6>Thank You</h6>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$_POST['email'].'>' . "\r\n";

if(mail($to,$subject,$message,$headers)){
	return true;
}else{
	return false;
}
