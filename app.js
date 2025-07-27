const amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
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
  const imagem = document.getElementById('imagemSorteio');
  resultado.innerHTML = "";
  imagem.style.display = "none";

  if (amigos.length === 0) {
    const li = document.createElement('li');
    li.textContent = "Nenhum amigo disponível para sortear.";
    resultado.appendChild(li);
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];

  const li = document.createElement('li');
  li.innerHTML = `🎉 Amigo sorteado: <strong>${nomeSorteado}</strong>`;
  resultado.appendChild(li);

  imagem.style.display = "block";
}

