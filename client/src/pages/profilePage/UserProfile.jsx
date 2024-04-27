import { useEffect, useState } from "react";
import Layout from "components/Layout";
import Nav from "pages/navbar/Nav";
import Profile from "components/Profile";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserFriends from "components/UserFriends";
import {
  selectPerson,
  selectPersonFriends,
  selectPersonsPost,
} from "fearures/person/personSlice";
import {
  fetchPersonsInfoAsync,
  fetchPersonsPostsAsync,
  likeOrDislikePostAsync,
  submitCommentAsync,
} from "fearures/person/personApi";
import { deletePostAsync } from "fearures/post/postApi";
import { addRemoveFreindsAsync } from "fearures/friends/friendApi";
import Post from "components/Post";
import { baseImageUrl } from "store/constant";

function UserProfile() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { personId } = useParams();
  const user = useSelector(selectPerson);
  const posts = useSelector(selectPersonsPost);
  const friends = useSelector(selectPersonFriends);

  useEffect(() => {
    dispatch(fetchPersonsInfoAsync({ token, personId }));
    dispatch(fetchPersonsPostsAsync({ token, personId }));
  }, [personId]);

  const postFunctions = {
    addRemoveFreinds: addRemoveFreindsAsync,
    deletePost: deletePostAsync,
    submitComment: submitCommentAsync,
    likeOrDislikePost: likeOrDislikePostAsync,
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <section className="mb-10 relative top-0 w-full ">
        <Nav />
      </section>

      {user ? (
        <Layout>
          <Profile
            firstName={user.firstName}
            lastName={user.lastName}
            picturePath={user.picturePath}
            location={user.location}
            occupation={user.occupation}
            impressions={user.impressions}
            viewedProfile={user.viewedProfile}
            userId={user.id}
          />

          {/* person post list */}
          <div className="mt-4 bg-inherit text-inherit">
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
          {/* to make sure the strudtur of the the component  so we need to pass the use object so we convert person id to user object and then pass */}
          <UserFriends token={token} user={{ _id: personId }} />
        </Layout>
      ) : (
        <p>somethin wrong</p>
      )}
    </div>
  );
}

export default UserProfile;
