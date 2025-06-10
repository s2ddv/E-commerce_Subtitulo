document.addEventListener("DOMContentLoaded", () => {
    fetchLivro();
});

function fetchLivro(){
    fetch("http://localhost:8000/api/livro/")
    .then(res => res.json())
    .then(data => renderLivro(data))
    .catch(err => console.error("Erro ao buscar produtos", err));
}

function renderLivro(livro){

    const container = document.getElementById("container");
    container.innerHTML = "";

    livro.forEach(livro => {
        const card = document.createElement("div");
        card.className = "livro";

        const imagemUrl = `http://localhost:8000/media/${livro.imagem}`;

        card.innerHTML = `
        <div class="capa-livro">
            <img src="${imagemUrl}" alt="${livro.nome}"/>
        </div>
        <h1>${livro.nome}</h1>
        <p class="preco">R$${livro.preco}</p>
        <p>${livro.resumo}</p>
        `
        container.appendChild(card);
    });
}