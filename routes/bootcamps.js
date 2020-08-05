const express = require("express");
const {
  getBootcamps,
  showBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(showBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
