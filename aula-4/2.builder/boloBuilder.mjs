import { Bolo } from "./bolo.mjs";

export class BoloBuiler {
  build() {
    if (!(this.ingredientes && this.infra)) {
      return this;
    }
    if (!this.ingredientes.filter(Boolean)) {
      return this;
    }

    return Bolo(
      this.tempoDePreparo,
      this.ingredientes,
      this.sabor,
      this.infra,
      this.cobertura
    );
  }

  addTempoDePreparo(tempoDePreparo) {
    this.tempoDePreparo = tempoDePreparo;

    return this;
  }

  addIngredientes(ingredientes) {
    this.ingredientes = ingredientes;

    return this;
  }
  addSabor(sabor) {
    this.sabor = sabor;

    return this;
  }

  addInfra(infra) {
    this.infra = infra;

    return this;
  }

  addCobertura(cobertura) {
    this.cobertura = cobertura;

    return this;
  }
}
