const router = require("express").Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
  updateThought,
  updateThoughtReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

router.route("/:thoughtId/reactions").post(addThoughtReaction);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(removeThoughtReaction)
  .put(updateThoughtReaction);
module.exports = router;
