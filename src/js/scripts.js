const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");
if (burger) {
    burger.addEventListener("click", (e) => {
        if (headerMenu) {
            burger.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        }
    });
}