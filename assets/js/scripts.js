let scrollButton = document.getElementById("scroll-btn")

window.onscroll = function() {
    scrollFunction();
}

/* display button once user has started scrolling */
function scrollFunction() {
    if (document.body.scrollTop > 500  || document.documentElement.scrollTop > 500 && screen.width < 576) {
        scrollButton.style.display = "block";
    }
    else {
        scrollButton.style.display = "none";
    }
}
/* bring user to top of bage when button is clicked */
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Side Navigation for index.html
add and remove active class when each
nav element is clicked  */
const links = document.querySelectorAll('.side-icon');

function toggleActiveClass() {
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}

links.forEach(link => link.addEventListener("click", toggleActiveClass));
