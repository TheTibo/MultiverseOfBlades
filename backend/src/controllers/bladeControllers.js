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
  const { id } = req.params;
  try {
    const blades = await tables.blade.readById(id);
    res.json(blades);
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

const edit = async (req, res, next) => {
  const editBlade = {
    name: req.body.name,
    picture: req.body.picture,
    origin: req.body.origin,
    id: req.params.id,
  };
  try {
    const result = await tables.blade.update(editBlade);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Blade introuvable" });
    } else {
      res.json({ msg: "Blade modifié avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.blade.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "blade introuvable" });
    } else {
      res.json({ msg: "Blade supprimé avec succès" });
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
