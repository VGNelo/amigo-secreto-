# amigo-secreto-
# 🎁 Projeto: Amigo Secreto

Uma aplicação web interativa em JavaScript para adicionar nomes à lista de participantes, visualizar os amigos adicionados e sortear aleatoriamente um nome — ideal para brincadeiras como Amigo Secreto.

## 🔧 Funcionalidades

### ➕ Adicionar Amigos
Permite que o usuário insira um nome e o adicione à lista:

- Captura o valor do campo de entrada com `document.getElementById`
- Verifica se o campo está vazio
- Exibe um alerta: `"Por favor, insira um nome."`
- Adiciona o nome ao array `amigos` usando `.push()`
- Limpa o campo após adicionar

### 📝 Editar Lista
Atualiza visualmente os amigos exibidos na interface:

- Seleciona o elemento `<ul>` com `document.getElementById`
- Limpa a lista com `.innerHTML = ""`
- Percorre o array `amigos` usando `for`
- Cria e insere elementos `<li>` para cada nome

### 🎲 Sortear Amigo
Seleciona aleatoriamente um nome da lista:

- Verifica se o array `amigos` contém nomes
- Gera um índice aleatório com `Math.random()` e `Math.floor()`
- Exibe o nome sorteado com `innerHTML` no elemento de resultado

## 🗂 Estrutura de Arquivos
/amigo-secreto
├── index/
│   └── index.html               # Página principal da aplicação
├── stilo/
│   └── style.css                # Estilos personalizados da interface
├── js/
│   ├── script.js                # Função: adicionar amigo à lista
│   ├── editarLista.js          # Função: atualizar visual da lista
│   └── sortearAmigo.js         # Função: realizar sorteio aleatório
├── img/                        # (opcional) pasta para imagens ou ícones
│   └── logo.png                # Exemplo de imagem usada na interface
├── .gitignore                  # Arquivos/pastas ignorados pelo Git
├── README.md                   # Documentação do projeto

## 📦 Como Executar

1. Clone ou baixe este repositório
2. Abra o arquivo `index/index.html` no navegador
3. Utilize os botões da interface para adicionar nomes, atualizar a lista e realizar o sorteio

## 💡 Sugestões de Melhoria

- Persistência de dados com `localStorage`
- Edição e exclusão de nomes da lista
- Histórico dos nomes sorteados com data e hora
- Estilização com CSS moderno, Bootstrap ou Tailwind

---

Feito por Valdemir - Curso Alura
