const AbstractManager = require("./AbstractManager");

class BladeManager extends AbstractManager {
  constructor() {
    super({ table: "blade" });
  }

  async create(blade) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, picture, origin) values (?, ?, ?)`,
      [blade.name, blade.picture, blade.origin]
    );
    return result;
  }

  async readAll() {
    const [result] = await this.database.query(`select* from ${this.table}`);
    return result;
  }

  async read(id) {
    const [result] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return result[0];
  }
}
module.exports = BladeManager;
