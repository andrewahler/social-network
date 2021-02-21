const router = require('express').Router();
const {
  addThoughts,
  removeThoughts,
} = require('../../controllers/user-controller');

router.route('/:userId').post(addThoughts);


router
  .route('/:userId/:thoughtstId')
  .put(addThoughts)
  .delete(removeThoughts);

router.route('/:userId/:thoughtsId/').delete(thoughtsReply);

module.exports = router;
