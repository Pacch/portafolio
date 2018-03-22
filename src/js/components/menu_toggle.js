//obterner las clases
function classToggle() {
    this.classList.toggle('icon-menu');
    this.classList.toggle('icon-cross');
}

//escuchar los clicks
document.querySelector('.icon-menu').addEventListener('click', classToggle);