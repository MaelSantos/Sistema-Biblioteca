let sair = document.querySelector('#link-sair');
// let perfil = document.querySelector('#link-perfil');

sair.addEventListener('click', function(){
    window.location.replace('../controle/logout.php');
})