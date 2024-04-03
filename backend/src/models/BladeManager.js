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

  async readById(idBlade) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ? `,
      [idBlade]
    );
    return rows;
  }

  async update(blade) {
    const [result] = await this.database.query(
      `Update ${this.table} set name=?, picture=?, origin=? where id=?`,
      [blade.name, blade.picture, blade.origin, blade.id]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `Delete from ${this.table} where id=?`,
      [id]
    );
    return result;
  }
}
module.exports = BladeManager;
