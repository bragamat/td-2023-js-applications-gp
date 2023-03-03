export class UsarReceitaStrategy {
  cozinhar(strategy) {
    return strategy.receita();
  }
}

export class DatabaseConnection {
  connect(db) {
    switch (db) {
      case "PG":
        db.connect();
        break;
      case "MYSQL":
        db.sqlConnect();
        break;
    }

    return strategy.receita();
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
