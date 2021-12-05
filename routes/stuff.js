const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
const stuffContoller = require('../controllers/stuff');
const multer = require('../middlewares/multer-config');


router.post("/", auth, multer, stuffContoller.createThing);

router.get("/", auth, stuffContoller.findAllThings);

router.get("/:id", auth, stuffContoller.findAThing);

router.put("/:id", auth, multer, stuffContoller.modifyAThing);

router.delete("/:id", auth, stuffContoller.deleteAThing);

module.exports = router;
