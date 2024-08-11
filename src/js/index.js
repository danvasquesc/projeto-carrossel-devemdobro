/* (codigo não está refatorado)

    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões

// aparecer o html no inspecionar
// console.log(document);

// querySelectorAll significa buscar todos os seletores informado, sem o All busca somente um / botoesCarrossel é a variavel e document.querySelectorAll(".botao") o valor da variavel, que representa os botoes do html
const botoesCarrossel = document.querySelectorAll(".botao");

// lista de imagem de todos os dragões
const imagens = document.querySelectorAll(".imagem");

// lista de informacoes de todos os dragoes (cria-se depois de remover a classe ativa dos elementos)
const informacoes = document.querySelectorAll(".informacoes");

// passo 2 - dar um jeito de identificar o clique do usuário no botão

// document.getElementById busca por um Id informado no html

// forEach - para cada (laço de repetição) / => - Arrow functions / click é a função

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // passo 3 - desmarcar o botão selecionado anterior

    // chama a classe selecionado
    const botaoSelecionado = document.querySelector(".selecionado");

    // remove a classe "selecionado" da lista, deixando apenas o botao
    botaoSelecionado.classList.remove("selecionado");

    // passo 4 - marcar o botão clicado como se estivesse selecionado

    // o botao clicado receberá a classe "selecionado"
    botao.classList.add("selecionado");

    // passo 5 - esconder a imagem anteriormente selecionada

    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");

    // passo 6 - fazer aparecer a imagem correspondente ao botão clicado

    // indice - posição de um elemento dentro de um array (0 ao 6)
    // tornando a imagem ativa de acordo com a posição do botao
    imagens[indice].classList.add("ativa");

    // passo 7 - esconder a informação do dragão anteriormente selecionado

    // chama a classe informacoes junto com a ativa, e remove a classe ativa
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");

    // passo 8 - mostrar a informação do dragão referente ao botão clicado

    informacoes[indice].classList.add("ativa");
  });
});
