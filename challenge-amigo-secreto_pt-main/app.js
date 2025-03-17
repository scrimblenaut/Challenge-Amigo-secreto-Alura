function adicionarAmigo() {
    let nome = document.getElementById("amigo").value; // Pega o nome digitado
    
    if (nome !== "") {  // Verifica se o nome não está vazio
        // Adiciona o nome à lista de amigos (exibido na tela)
        document.getElementById("listaAmigos").innerHTML += `<li>${nome}</li>`;
        
        // Adiciona o nome à lista interna (array)
        amigos.push(nome); 
    } else {
        alert("Por favor, digite um nome!"); // Alerta se o campo estiver vazio
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear!"); // Verifica se há amigos na lista
        return;
    }

    // Sorteia um nome aleatório da lista de amigos
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Exibe o resultado (quem será sorteado)
    alert(`O nome sorteado é: ${amigoSorteado}`);
}

let amigos = []; // Array para armazenar os amigos

