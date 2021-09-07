<?php 
   if (isset($_POST['submit'])){
       $name = $_POST['name'];
       $email = $_POST['email'];
       $message = $_POST['message'];

        $mailTo = "a02363876@usu.edu";
        $headers = "From: ".$email;
        $txt = "Email From".$name.".\n\n".$message;

       mail($mailTo, $txt, $headers);
       header("Location: ../contact.html");
   }
?>