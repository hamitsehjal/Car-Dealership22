let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

let login=document.querySelector("#login-close-btn");
let form=document.querySelector('form');

login.onclick=()=>{
    login.classList.toggle("fa-times");
    form.classList.toggle("active");
}


menu.onclick = () => {
    // menu.classList.toggle("fa-circle-xmark");
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");

}

window.onscroll = () => {
    // The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

}

window.onload = () => {
    // The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
        document.querySelector('form').classList.remove('active');
    } else {
        document.querySelector('.header').classList.remove('active');
        document.querySelector('form').classList.add('active');


    }


}

