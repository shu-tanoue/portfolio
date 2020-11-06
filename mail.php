<?php
if(isset($_POST["submit"])){
$name = $_POST['name'];
$mailFrom = $_POST["email"];
$message = $_POST["message"];
$pattern = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

$mailTo = "stbook.syu@icloud.com";
$sbject = "from portfolio form";
$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;
$flag = mail($mailTo, $sbject, $txt, $headers);

$mailTo = $mailFrom;
$sbject = "customer";
$headers = "From: stbook.syu@icloud.com";
$txt = "You have received an e-mail from ".$name.".\n\n".$message;
$flag = mail($mailTo, $sbject, $txt, $headers);


header("Location: index.html#four?mailsend=true");
}
?>