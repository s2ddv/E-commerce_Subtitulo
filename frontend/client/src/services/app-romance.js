fetch('http://127.0.0.1:8000/api/livros/')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('livros');
        data.forEach(livro => {
            const livroDiv = document.createElement('div');
            livroDiv.className = 'livro';
            const imagemUrl = `http://127.0.0.1:8000${livro.imagem}`;
            livroDiv.innerHTML = `
            <img src="${livro.imagem}">
            <p class="preco">R$${livro.preco}</p>
            `;
            container.appendChild(livroDiv);
        })
    })