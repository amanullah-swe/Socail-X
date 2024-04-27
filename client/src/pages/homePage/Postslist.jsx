import Post from "components/Post";
import { addRemoveFreindsAsync } from "fearures/friends/friendApi";
import {
  deletePostAsync,
  likeOrDislikePostAsync,
  submitCommentAsync,
} from "fearures/post/postApi";
import { baseImageUrl } from "store/constant";
function Postslist({ posts }) {
  const postFunctions = {
    addRemoveFreinds: addRemoveFreindsAsync,
    deletePost: deletePostAsync,
    submitComment: submitCommentAsync,
    likeOrDislikePost: likeOrDislikePostAsync,
  };
  return (
    <div className="w-full min-h-[500px] mt-4 bg-inherit dark:bg-dark-background text-inherit rounded-xl">
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            name={post.firstName + post.lastName}
            location={post.location}
            profileImageUrl={baseImageUrl + post.userPicturePath}
            postImageUrl={baseImageUrl + post.picturePath}
            discreption={post.description}
            personId={post.userId}
            postId={post._id}
            likes={post.likes}
            comments={post.comments}
            {...postFunctions}
          />
        );
      })}
    </div>
  );
}
export default Postslist;
