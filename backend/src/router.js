const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const bladeControllers = require("./controllers/bladeControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/blade", bladeControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/blade/:id", bladeControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/blade", bladeControllers.add);

router.put("/blade/:id", bladeControllers.edit);

router.delete("/blade/:id", bladeControllers.destroy);

/* ************************************************************************* */

module.exports = router;
