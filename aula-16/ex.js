function print(mensagem){
    console.log(mensagem)
  }
   
  print("Olá, bom dia")
   
  function soma(n1, n2){
    return n1 + n2
  }
   
  console.log(soma(10, 10))
let print2 = mensagem => console.log(mensagem);

let soma2 = (n1, n2) => n1 + n2;

print2("Olá! Bom dia");
console.log(soma2(10,20));