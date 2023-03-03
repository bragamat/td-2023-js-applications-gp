import { UsarReceitaStrategy } from "./1.strategy.mjs";
import { Mae, Vo, Eu } from "./pessoas.mjs";

const strategy = new UsarReceitaStrategy();

const rMae = new Mae();
const rVo = new Vo();
const rEu = new Eu();

console.log(rMae.receita());
console.log(rVo.receita());
console.log(rEu.receita());
