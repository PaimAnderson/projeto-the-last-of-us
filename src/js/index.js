// passo 1- Pegar elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
//passo 2- Identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3- desmarcar a seleção de botão anterior
        const botaoSelecionado = document.querySelector(".selecionado")
        botaoSelecionado.classList.remove("selecionado")
        //passo 4- marcar o botão clicado como selecionado
        botao.classList.add("selecionado")
        //passo 5- esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove("ativa")
        //passo 6- mostrar imagem correspondente ao botão clicado
        imagens[indice].classList.add("ativa")

    })
})