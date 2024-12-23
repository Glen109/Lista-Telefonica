const form = document.getElementById('contato');
let linhas = '';
const pessoas = [];
const numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero-de-telefone');

    if (pessoas.includes(inputNome.value)) {
        alert(`A Pessoa: ${inputNome.value} ja foi inserida`);
    } else {
        pessoas.push(inputNome.value);
        numeros.push(parseFloat(inputNumero.value));
    
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
