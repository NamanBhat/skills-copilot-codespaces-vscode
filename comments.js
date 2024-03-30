// Create web server

const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;
const commentController = require('../controllers/comments');

app.use(express.json());

router.get('/', commentController.getComments);
router.post('/', commentController.addComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

app.use('/comments', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);