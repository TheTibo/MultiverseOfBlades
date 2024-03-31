const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async readAll() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return result;
  }

  async read(id) {
    const [result] = await this.database.query(
      ` select * from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }

  async create(userInfos) {
    const [result] = await this.database.query(
      ` insert into ${this.table} (email, password, username) values (?, ?, ?)`,
      [userInfos.email, userInfos.password, userInfos.username]
    );
    return result;
  }
}

module.exports = UserManager;
