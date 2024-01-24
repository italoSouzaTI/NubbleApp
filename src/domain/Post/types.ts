export interface Post {
  id: string;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: String;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}
