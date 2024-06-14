const pre_carremento = document.querySelector("div.pre-carregamento");

function preCarregamento(){
    pre_carremento.style.opacity = "0";

    setTimeout(() => {
        pre_carremento.style.display = "none";
    }, 500);
}