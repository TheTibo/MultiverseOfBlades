const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const bladeControllers = require("./controllers/bladeControllers");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

const authMiddlewares = require("./services/auth");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/blade", bladeControllers.browse);
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/blade/:id", bladeControllers.read);
router.get("/user/:id", userControllers.readId);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/blade", bladeControllers.add);
router.post("/user", authMiddlewares.hashPassword, userControllers.add);

// Route to update a  item
router.put("/blade/:id", bladeControllers.edit);

// Route to delete a  item
router.delete("/blade/:id", bladeControllers.destroy);

// Route to log
router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
