const menuIcon = document.querySelector("#menu-icon");
const navLiks = document.querySelector(".nav-links");


menuIcon.onclick = () => {
    navLiks.classList.toggle('active');
}