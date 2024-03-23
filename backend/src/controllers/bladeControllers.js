const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const blades = await tables.blade.readAll();
    res.json(blades);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const blades = await tables.blade.read(req.params.id);
    if (blades == null) {
      res.sendStatus(404);
    } else {
      res.json(blades);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const addBlade = {
    name: req.body.name,
    picture: req.body.picture,
    origin: req.body.origin,
  };
  try {
    const result = await tables.blade.create(addBlade);
    res.status(200).json({
      msg: "article enregistré avec succès",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
