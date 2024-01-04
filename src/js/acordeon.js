const itensPerguntasERespostas = document.querySelectorAll(".item");

// CADA VEZ QUE REALIZAR UM "CLICK" SERÁ ADICIONADO A CLASSE "ATIVO" ONDE FOI CLICADO
itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {

        const itemAtivoAtual = document.querySelector(".ativo");

        if (itemAtivoAtual) { 
            itemAtivoAtual.classList.remove("ativo");
         }

        item.classList.add("ativo");
    })
})