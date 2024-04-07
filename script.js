let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(Links =>{
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ' ]'.classList.add('active'))
      })
    }
  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário

  // Aqui você pode adicionar o código para enviar o formulário usando JavaScript

  // Por exemplo, você pode usar o método fetch() para enviar os dados do formulário para o servidor
  fetch('https://formsubmit.co/juan.figueiredo13@hotmail.com', {
    method: 'POST',
    body: new FormData(this) // Isso envia os dados do formulário
  })
  .then(response => {
    // Aqui você pode lidar com a resposta do servidor, como exibir uma mensagem de sucesso
    console.log('Resposta do servidor:', response);
  })
  .catch(error => {
    // Aqui você pode lidar com erros de envio, como exibir uma mensagem de erro
    console.error('Erro:', error);
  });
});