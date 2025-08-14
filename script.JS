// ================================================== 
// ==> SELECIONAR ELEMENTOS <==
// 1. Selecione o elemento <body> e armazene em uma variável
let body = document.body;  // Usar document.body para pegar o <body> diretamente

// 2. Selecione todos os elementos <p> e armazene em uma variável
let paragrafos = document.getElementsByTagName("p");  // Isso já retorna uma coleção de <p>

// 3. Selecione o elemento com id "meuId" (crie este elemento no HTML se necessário)
let elementoPorId = document.getElementById("meuId");  

// ================================================== 
// ==> CRIAR E ADICIONAR ELEMENTOS <==
/* 
4. Crie um novo elemento <h1> 
5. Defina o texto do h1 como "Minha Atividade DOM"
6. Adicione o h1 ao body
*/
let novoH1 = document.createElement("h1");
novoH1.textContent = "Minha Atividade Dom";
body.appendChild(novoH1);

// ================================================== 
// ==> MODIFICAR ESTILOS <==
/* 
7. Mude a cor de fundo do body para "lightblue" 
8. Mude a cor do texto de todos os parágrafos para "darkgray"
*/
body.style.backgroundColor = "lightblue";  // Altera a cor de fundo do body para "lightblue"

for (let p of paragrafos) {  // Percorrer todos os <p> e aplicar o estilo
  p.style.color = "darkgray";
}

// ================================================== 
// ==> MANIPULAR ATRIBUTOS <==
/* 
9. Adicione uma classe "destaque" ao elemento com id "meuId" 
10. Adicione um atributo "title" com valor "Elemento destacado" ao mesmo elemento
*/
if (elementoPorId) {  // Verifica se o elemento existe antes de manipular
  elementoPorId.classList.add("destaque");  // Adiciona a classe "destaque"
  elementoPorId.setAttribute("title", "Elemento destacado");  // Adiciona o atributo "title"
}
