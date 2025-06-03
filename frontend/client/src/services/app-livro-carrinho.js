document.addEventListener('DOMContentLoaded', () => {
    const genero = document.title.split(' | ')[0].toLowerCase();
    fetch(`http://127.0.0.1:8000/api/livros`)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao buscar livros');
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('livros');
            container.innerHTML = ''; 
            data.forEach(livro => {
                const livroGenero = livro.genero.nome.toLowerCase();
                if (livroGenero === genero) {
                    const livroDiv = document.createElement('div');
                    livroDiv.className = 'livro';
                    const imagemUrl = `${livro.imagem}`;
                    livroDiv.innerHTML = `
                        <img src="${imagemUrl}" alt="${livro.titulo}" style="max-width:300px;">
                        <div class="right-grid">    
                            <div class="box">
                                <p id="nome_livro">${livro.nome}</p>
                                <p class="preco">${livro.preco}</p>
                            </div>
                            <div class="button_carrinho">ADICIONAR AO CARRINHO</div>
                            <br><br><br><br>
                            <div class="button_comprar">COMPRAR</div>
                            <div class="informacoes_livros">
                                <p class="autor"><strong>Autor:</strong> ${livro.autor}</p>
                                <p class="resumo"><strong>Resumo:</strong> ${livro.resumo}</p>
                            </div>
                        </div>
                    `;
                    container.appendChild(livroDiv);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar livros:', error);
        });
});
