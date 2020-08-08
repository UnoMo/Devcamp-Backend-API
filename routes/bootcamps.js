const express = require("express");
const {
  getBootcamps,
  showBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require("../controllers/bootcamps");

// Include other resource routers
const courseRouter = require("./courses");
const { Router } = require("express");

const router = express.Router();

// Re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/").get(getBootcamps).post(createBootcamp);

router.route("/:id/photo").put(bootcampPhotoUpload);

router
  .route("/:id")
  .get(showBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
