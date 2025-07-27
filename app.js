// script.js
const amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo'); // ou 'nomeAmigo' se você mudar o id
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = "";

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (amigos.length === 0) {
    resultado.innerHTML = "Nenhum amigo disponível para sortear.";
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];

  resultado.innerHTML = `🎉 Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}