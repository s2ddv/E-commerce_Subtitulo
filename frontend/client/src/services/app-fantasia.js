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
                if (livroGenero === "fantasia") {
                    const livroDiv = document.createElement('div');
                    livroDiv.className = 'livro';
                    const imagemUrl = `${livro.imagem}`;
                    livroDiv.innerHTML = `
                        <a href="/frontend/client/src/pages/produtos.html?id=${livro.id}">
                            <img src="${imagemUrl}" alt="${livro.titulo}">
                        <p class="nome-livro">${livro.nome}</p>
                        <p class="autor-livro">${livro.autor}</p>
                        <p class="preco">R$${livro.preco}</p>
                    `;
                    container.appendChild(livroDiv);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar livros:', error);
        });
});