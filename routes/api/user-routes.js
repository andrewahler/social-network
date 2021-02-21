const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:userId/friends/')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;