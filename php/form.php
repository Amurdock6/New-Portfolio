<?php 
   if (isset($_POST['submit'])){
       $name = $_POST['name'];
       $email = $_POST['email'];
       $message = $_POST['message'];

        $mailTo = "alexanderrmurdock@gmail.com";
        $headers = "From: ".$email;
        $txt = "Email From ".$name." sent from form on alexanderrmurdock.com";
        $email_body = $message;

       mail($mailTo, $txt, $email_body, $headers);
       header("Location: ../contact.html");
   }
?>