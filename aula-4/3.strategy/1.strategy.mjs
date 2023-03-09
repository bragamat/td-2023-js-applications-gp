export class UsarReceitaStrategy {
  cozinhar(strategy) {
    return strategy.receita();
  }
}

export class DatabaseConnection {
  constructor() {
    this.strategy = null
  }
  connect(db) {
    switch (db) {
      case "PG":
        this.strategy = db.type

        db.connect();
        break;
      case "MYSQL":
        this.strategy = db.type

        db.sqlConnect();
        break;
    }

    return strategy.receita();
  }

  setStrategy(dbType){
    this.strategy = dbType
  }

}

export class CurrentUser {
  profile(user) {
    if (user.type === "guest") {
      return user.ip;
    }

    return user.name;
  }
}
