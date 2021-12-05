const express = require("express");
const router = express.Router();
const Thing = require('../models/Thing');
const stuffContoller = require('../controllers/stuff');


router.post("/", stuffContoller.createThing);

router.get("/", stuffContoller.findAllThings);

router.get("/:id", stuffContoller.findAThing);

router.put("/:id", stuffContoller.modifyAThing);

router.delete("/:id", stuffContoller.deleteAThing);

module.exports = router;
