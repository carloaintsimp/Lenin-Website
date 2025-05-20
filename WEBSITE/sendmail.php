<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "aljimsoncarlorasonazppsu@gmail.com"; //
    $subject = "New Contact Form Submission";
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    header("Location: contact.html");
    exit();
}
?>
<?php
header("Location: thankyou.html");
exit();