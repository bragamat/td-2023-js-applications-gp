import { CurrentUser, UsarReceitaStrategy } from "./1.strategy.mjs";
import { Guest, Admin, Support } from "./pessoas.mjs";
// import { Mae, Vo, Eu, Guest, Admin } from "./pessoas.mjs";
// const rMae = new Mae();
// const rVo = new Vo();
// const rEu = new Eu();
// const strategy = new UsarReceitaStrategy();
// strategy.cozinhar(rMae);
// strategy.cozinhar(rVo);
// strategy.cozinhar(rEu);

const currentUser = new CurrentUser();

console.log(currentUser.profile(new Guest()));
console.log(currentUser.profile(new Admin()));
console.log(currentUser.profile(new Support()));
