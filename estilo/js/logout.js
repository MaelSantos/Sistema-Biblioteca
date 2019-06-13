let sair = document.querySelector('#link-sair');
let perfil = document.querySelector('#link-perfil');

sair.addEventListener('click', function () {
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('logado');
    window.location.replace('../controle/logout.php');
});

perfil.addEventListener('click', function () {
    window.location.replace('perfil.php');
});
