const nome ="Rafael Apolinário"
let nome2 = ""
let pessoasDefault={
    nome: "Marcelo eltz",
    idade: "33",
    trabalho: "programador",
}

let nomes=["Rafael Apolinário","maria silva","Pedro silva"];
let pessoas = [
    {
        nome: "Marcelo eltz",
        idade: "33",
        trabalho: "programador",
    },
    {
        nome: "Maria silva",
    idade: "25",
    trabalho: "UX/UI",
    },

];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("valor alterado:");
console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log (nome2);
}

function imprimirPessoa(pessoas) {
    console.log ("Nome:");
    console.log(pessoas.nome);
    
    console.log ("idade:");
    console.log(pessoas.idade);
    
    console.log ("trabalho:");
    console.log(pessoas.trabalho);
};

function imprimirPessoas ({
    pessoas.forEach((item) => 
        console.log("nome");
        console.log(item.nome);

        console.log ("idade:");
    console.log(item.idade);
    
    console.log ("trabalho:");
    console.log(item.trabalho);

    })


imprimirPessoas();