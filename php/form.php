<?php 
   if (isset($_POST['submit'])){
       $name = $_POST['name'];
       $email = $_POST['email'];
       $message = $_POST['message'];

        $mailTo = "alexanderrmurdock@gmail.com";
        $headers = "From: ".$email;
        $txt = "Email From".$name.".\n\n".$message;

       mail($mailTo, $txt, $headers);
       header("Location: ../contact.html");
   }
?>