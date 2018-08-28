import {Article} from "./article.model";
import {User} from "./user.model";

export interface Comment {

  content: string;
  creationDate: Date;

  articleModel: Article;
  userModel: User;
  parentComment: Comment;

  // private List<CommentModel> childCommentsModel;

}
