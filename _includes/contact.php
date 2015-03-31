<!--
<?php
if($_POST["message"]) {
    $recipient="designwithbigelow@gmail.com";
    $subject="A Message to You Rudy";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
?>
-->

<!--
<?php
if($_POST["message"]) {
    mail("designwithbigelow@gmail.com", "Has Sent You A Message", $_POST["message"], "From: an@email.address");
}
?>
-->

<!--
<form action="/includes/contact.php" method="post" enctype="text/plain">
    
    <span class="large-6 small-6 columns">
        <input type="text" class="left" name="sender" placeholder="Your Full Name">
    </span>
    
    <span class="large-6 small-6 columns">
        <input type="text" class="right" name="senderEmail" placeholder="Your Email Address">
    </span>

    <textarea  type="text" name="message" placeholder="Your Message"></textarea>
    
    <input type="submit" class="button-three small-12 columns" value="Send Your Message"/>
    
</form>
-->