onLoad();

function onLoad() {
    //Cria o array de pessoas
    let pessoas = [];
  
    //Cria a pessoa 1
    let pessoa1 = {
      nome: 'João',
      idade: 18
    };
    
    //Cria a pessoa 2
    let pessoa2 = {
      nome: 'Paulo',
      idade: 25
    };
  
    //Cria a pessoa 3
    let pessoa3 = {
      nome: 'Julio',
      idade: 10
    };
  
    //Adiciona as 3 pessoas no array de pessoas
    pessoas.push(pessoa1);
    pessoas.push(pessoa2);
    pessoas.push(pessoa3);
  
    //Imprime o array desordenado
    console.log(pessoas);

    //Ordena as pessoas de acordo com a idade da pessoa.
    console.log(pessoas.sort(ordenarPorIdade));
    
    //Imprime o array ordenado por idade
  }
  
  function ordenarPorIdade(a, b){
  return a.idade - b.idade;
  }
