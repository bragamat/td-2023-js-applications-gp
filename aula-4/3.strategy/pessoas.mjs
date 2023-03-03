export class Mae {
  receita() {
    return "Cozinhar com carinho";
  }
}

export class Vo {
  receita() {
    return "Cozinhar com exagero";
  }
}

export class Eu {
  receita() {
    return "Nao cozinhar, perdi delivery";
  }
}

export class PG {
  connect() {}
}
export class MySQL {
  sqlConnect() {}
}
export class Mongo {
  query() {}
}

export class Guest {
  ip = "172.134.1.0";
  type = "guest";
}

export class User {
  type = "user";
  name = "User";
}

export class Admin {
  type = "admin";
  name = "Admin";
}

export class Support {
  type = "support";
  name = "User";
}
