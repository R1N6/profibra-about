<?php 
$myemail = 'profibra@live.com';
if(empty($_POST['fname'])  || empty($_POST['fmail']) || empty($_POST['fasunto']))
{
    echo'<script type="text/javascript">
    alert("Porfavor llena todos los datos, e intentalo de nuevo");
    window.location.href="../html/correo.html";
    </script>';
}else{

    $name = $_POST['fname']; 
    $email_address = $_POST['fmail']; 
    $message = $_POST['fasunto']; 
    
    $to = $myemail; 
	$email_subject = "Formulario de contacto de: $name";
	$email_body = "Hemos recibido un nuevo mensaje. ".
	" Aqui estan los detalles:\n Nombre: $name \n Correo Electrónico: $email_address \n\n Mensaje: \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers = "Reply-To: $email_address";
	
    mail($to,$email_subject,$email_body,$headers);
    echo'<script type="text/javascript">
    alert("¡Envio Exitoso!. Gracias por contactarnos. Te responderemos en la brevedad posible");
    </script>';
	//redireccionar a la pagina correspondiente.
	header('Location: ../html/correo.html');
}
?>
