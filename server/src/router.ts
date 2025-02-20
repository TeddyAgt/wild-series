import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import request handlers
import categoryActions from "./modules/category/categoryActions";
import itemActions from "./modules/item/itemActions";
import programActions from "./modules/program/programActions";
import sayActions from "./modules/say/sayActions";

// Define routes
// items
router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// categories
router.get("/api/category", categoryActions.browse);
router.get("/api/category/:id", categoryActions.read);
router.post("/api/categories", categoryActions.validate, categoryActions.add);
router.put(
  "/api/categories/:id",
  categoryActions.validate,
  categoryActions.edit,
);

// programs
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
router.post("/api/programs", programActions.validate, programActions.add);
router.put("/api/programs/:id", programActions.validate, programActions.edit);
router.delete("/api/programs/:id", programActions.destroy);

/* ************************************************************************* */

// Declaration of a "Welcome" route
router.get("/", sayActions.sayWelcome);

export default router;
