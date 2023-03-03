// # Context This
// this
const pessoa = {
  firstName: "Mateus",
  lastName: "Braga",
  falar: function (id) {
    console.log(
      id,
      `salve, meu nome e: ${this.firstName}, mas todo mundo me chama por ${this.lastName}`
    );
  },
};

const pessoa2 = {
  firstName: "Rogerio",
  lastName: "Marques Braga",
  falar: () => {
    console.log(
      `salve, meu nome e: ${this.firstName}, mas todo mundo me chama por ${this.lastName}`
    );
  },
};
// console.log(pessoa.falar()); //salve, meu nome e: undefined, mas todo mundo me chama por undefined
// console.log(pessoa.falar.bind(pessoa2)());
// Rodando no NODE: resultado: salve, meu nome e: undefined, mas todo mundo me chama por undefined
// Rodando no Browser: () =>  {} = o this global faz referencia ao window.

console.log(pessoa.falar.call(pessoa2, "123"));
