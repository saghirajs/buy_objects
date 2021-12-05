const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
const stuffContoller = require('../controllers/stuff');



router.post("/", auth, stuffContoller.createThing);

router.get("/", auth, stuffContoller.findAllThings);

router.get("/:id", auth, stuffContoller.findAThing);

router.put("/:id", auth, stuffContoller.modifyAThing);

router.delete("/:id", auth, stuffContoller.deleteAThing);

module.exports = router;
