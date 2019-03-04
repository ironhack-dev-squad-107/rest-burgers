const express = require("express");

const Burger = require("../models/burger-model.js");

const router = express.Router();

// operations on the LIST of burgers
// -----------------------------------------------------------------------------
router.get("/burgers", (req, res, next) => {
  Burger.find()
    .then(burgers => res.json(burgers))
    .catch(err => next(err));
});

router.post("/burgers", (req, res, next) => {
  const { name, size, toppings } = req.body;
  Burger.create({ name, size, toppings })
    .then(burger => res.json(burger))
    .catch(err => next(err));
});

// operations on an INDIVIDUAL burger
// -----------------------------------------------------------------------------
router.get("/burgers/:id", (req, res, next) => {
  const { id } = req.params;
  Burger.findById(id)
    .then(burger => res.json(burger))
    .catch(err => next(err));
});

router.put("/burgers/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, size, toppings } = req.body;
  Burger.findByIdAndUpdate(
    id,
    { $set: { name, size, toppings } },
    { runValidators: true, new: true }
  )
    .then(burger => res.json(burger))
    .catch(err => next(err));
});

router.delete("/burgers/:id", (req, res, next) => {
  const { id } = req.params;
  Burger.findByIdAndRemove(id)
    .then(burger => res.json(burger))
    .catch(err => next(err));
});

module.exports = router;
