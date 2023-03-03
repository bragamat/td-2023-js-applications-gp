// # Builder
//
import { BoloBuiler } from "./boloBuilder.mjs";

const bolo1 = new BoloBuiler()
  .addTempoDePreparo(40)
  .addInfra("forno")
  .addCobertura("chocolate")
  .addSabor("quiejo")
  .addIngredientes(["ovo", "feijao", "farinha", "queijo"])
  .build();

console.log(bolo1);
