let scrollEl = document.querySelector("nav");
let icons = document.querySelectorAll(".icone");
let menu = document.querySelector("ul");

document.addEventListener("scroll", (event) => { // Muda cor no scroll
    const posicao = window.scrollY;
    if (posicao > 0) {
        scrollEl.classList.add("ativo");
        menu.classList.add("remover");
        icons.forEach(icon => icon.classList.add("mudacor"));
    } else {
        scrollEl.classList.remove("ativo");
        menu.classList.remove("remover");
        icons.forEach(icon => icon.classList.remove("mudacor"));
    }
});