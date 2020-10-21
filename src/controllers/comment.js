import { Comment } from '../database/models/comment';

class commentController {
  static async comment(req, res) {
    const { userId, requestId, comment } = req.body;
    const addComment = await Comment.create({ requestId, userId, comment });

    res
      .status(201)
      .json({ message: res.__('Your comment has been created'), addComment });
  }

  static async getAllComments(req,res) {
    const { userId, requestId, comment } = req.body;
    const getAllComments = await Comment.get({ requestId, userId, comment });

    res
      .status(201)
      .json({ message: res.__('Here is a list of all your comments'), getAllComments });
    }
  }

  static async getOneComment(req, res) {
    const { comment, commentId } = req.body;
    const getOneComment = await Comment.findOne(
      { comment },
      {
        where: {
          id: commentId
        }
      }
    );
    if (!getOneComment) {
      return res
        .status(409)
        .json({ message: res.__('Comment does not exist') });
    }
    res.status(200).json({ message: res.__('This is the comment you are looking for') });
  }
}

export default commentController
