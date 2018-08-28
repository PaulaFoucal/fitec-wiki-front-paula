import {User} from "./user.model";

export interface Article {

  title: string;
  content: string;
  creationDate: Date;
  isAccepted: boolean;

  userModel: User;

  // private List<CommentModel> commentsModel;

}
