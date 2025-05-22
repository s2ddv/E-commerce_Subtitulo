document.addEventListener("DOMContentLoaded", () => {
    fetchProdutos();
})

function fetchProdutos(){
    fetch("https://localhost:8000/api/livro") // NECESSARIO CORRIGIR O LOCAL
    .then(res => res.json())
    .then(data => renderProdutos(data)) // NECESSARIO CORRIGIR O LOCAL 
    .catch(err => console.error("Erro ao buscar produtos", err));
}

function renderProdutos(livro){
    
    const container = document.getElementById("livro")
    
}