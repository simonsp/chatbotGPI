$(function () {

    const $mensajeFormulario = $('#mensajeForm');
    const $mensajeUsuario = $('#mensaje');
    const $chat = $('#cuerpoTarjeta');

    
    $mensajeFormulario.submit(evento => {
        evento.preventDefault();
        console.log($mensajeUsuario.val());
        $chat.append('<p>Usuario: ' + $mensajeUsuario.val() + '</p>' + '</br>');
        $mensajeUsuario.val('');
    });

});
