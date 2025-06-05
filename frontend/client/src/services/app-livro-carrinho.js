document.addEventListener('DOMContentLoaded', () => {
    //const genero = document.title.split(' | ')[0].toLowerCase();

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
                                <p class="nome_livro">${livro.nome}</p>
                                <p class="preco">${livro.preco}</p>
                                <button class="button_carrinho">ADICIONAR AO CARRINHO</button>
                                <br><br><br><br>
                                <button class="button_comprar">COMPRAR</button>
                                <div class="informacoes_livros">
                                    <p class="autor"><strong>Autor:</strong> ${livro.autor}</p>
                                    <p class="resumo"><strong>Resumo:</strong> ${livro.resumo}</p>
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
