const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const readId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await tables.user.read(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const userInfos = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
  };

  try {
    const result = await tables.user.create(userInfos);
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, readId, add };
