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

// document.querySelector(".home").onmousemove = (e) => {
//     document.querySelectorAll('.home-parallax').forEach(elem => {
//         let speed = elem.getAttribute('data-speed');
//         // The read-only Window property innerWidth returns the interior width of the window in pixels.
//         //  This includes the width of the vertical scroll bar, if one is present.

//         // The pageX read-only property of the MouseEvent interface returns the X (horizontal) coordinate (in pixels) 
//         // at which the mouse was clicked,  relative to the left edge of the entire document.
//         let x = (window.innerWidth - e.pageX * speed) / 90;
//         let y = (window.innerHeight - e.pageY * speed) / 90;

//         // The translate() CSS function repositions an element in the horizontal and/or vertical directions.
//         // Note: translateX(tx) is equivalent to translate(tx, 0) or translate3d(tx, 0, 0).
//         elem.style.transform = `translateX(${y}px) translateY(${x}px)`;
//         // elem.style.transform = `translate(${y}px,${x}px)`;
//     })

// }


document.querySelector(".home").onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(elem => {


        elem.style.transform = `translateX(0px) translateY(0px)`;
        // elem.style.transform = `translate(0px,0px)`;
    })

}
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
