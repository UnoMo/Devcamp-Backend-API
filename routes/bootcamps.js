const express = require("express");
const {
  getBootcamps,
  showBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(showBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
