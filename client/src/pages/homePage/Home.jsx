import React, { useEffect } from "react";
import Nav from "pages/navbar/Nav";
import Layout from "../../components/Layout.jsx";
import Profile from "components/Profile.jsx";
import Postslist from "./Postslist.jsx";
import UserFriends from "components/UserFriends.jsx";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "components/CreatePost.jsx";
import { fetchPostsAsync } from "fearures/post/postApi.js";
import { selectPosts } from "fearures/post/postSlice.js";
function Home() {
  const { user, token } = useSelector((state) => state.auth);
  const posts = useSelector(selectPosts);

  const {
    firstName,
    lastName,
    picturePath,
    location,
    occupation,
    impressions,
    viewedProfile,
  } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(fetchPostsAsync(token));
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col items-center relative">
      <section className="mb-10 relative top-0 w-full ">
        <Nav />
      </section>

      <Layout>
        <Profile
          firstName={firstName}
          lastName={lastName}
          picturePath={picturePath}
          location={location}
          occupation={occupation}
          impressions={impressions}
          viewedProfile={viewedProfile}
          personId={user._id}
        />
        <div>
          <CreatePost />
          <Postslist posts={posts} />
        </div>
        <div className="md:inline-block hidden">
          <UserFriends token={token} user={user} />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
