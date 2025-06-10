document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    fetch(`http://127.0.0.1:8000/api/livros/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao buscar livros');
            return response.json();
        })
        .then(data => {
            const livro = data; 
            const container = document.getElementById('livros');
            container.innerHTML = ''; 
                    const livroDiv = document.createElement('div');
                    livroDiv.className = 'livro';
                    const imagemUrl = `${livro.imagem}`;
                    livroDiv.innerHTML = `
                    <div id="livros" class="livros">    
                            <div class="capa-livro">
                                <img src="${imagemUrl}" alt="${livro.titulo}" style="max-width:300px;">
                            </div>
                        <div class="right-grid">    
                            <div class="box">
                                <h1 class="nome_livro">${livro.nome} - ${livro.autor}</h1>
                                <p class="preco">R$${livro.preco}</p>
                                <div class="box-button">
                                    <button class="button_carrinho" onclick("adicionarAoCarrinho")>ADICIONAR AO CARRINHO</button>
                                    <br><br>
                                    <button class="button_comprar">COMPRAR</button>
                                </div>
                                <div class="informacoes_livros">
                                    <p class="resumo"><strong></strong> ${livro.resumo}</p>
                                    <br><br><br><br><br><br><br><br><br><br><br><br><br>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    container.appendChild(livroDiv);
                
        })
        .catch(error => {
            console.error('Erro ao carregar livros:', error);
        });
});

function adicionarAoCarrinho(nome, preco) {
    let carrinho =
JSON.parse(localStorage.getItem('carrinho')) || 
[];

    const livros = carrinho.find(livros => livros.nome === nome);
    if(livros) {
        livros.quantidade += 1;
    } else { 
        carrinho.push({ nome, preco, quantidade: 1});
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nome} adicionado ao carrinho!`)
}