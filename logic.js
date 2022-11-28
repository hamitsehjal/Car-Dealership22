let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");


document.querySelector("#login-btn").onclick = () => {
    document.querySelector(".login-form-container").classList.toggle("active");
}

document.querySelector("#login-close-btn").onclick = () => {
    document.querySelector(".login-form-container").classList.remove("active");
}

menu.onclick = () => {
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
    } else {
        document.querySelector('.header').classList.remove('active');


    }


}

