import { Router } from 'express';
import commentController from '../../controllers/comment';
import asynchandler from '../../middlewares/asynchandler';

const commentRouter = new Router();

commentRouter
  .post('/comments', asynchandler(commentController.comment))
  .get('/comments/id', asynchandler(commentController.getOneComment))
  .get('/comments', asynchandler(commentController.getAllComments));

export default commentRouter;
