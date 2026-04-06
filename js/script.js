//Toggle Active
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerM = document.querySelector("#hamburger-menu");
hamburgerM.onclick = () => {
    navbarNav.classList.toggle("active");
};
document.addEventListener("click", function (e) {
    if (!hamburgerM.contains(e.target) && !navbarNav.contains(e.target))
        navbarNav.classList.remove("active");
});
