import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Nav from 'pages/navbar/Nav'
import Profile from 'components/Profile';
import Postslist from 'pages/homePage/Postslist';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import UserFriends from 'components/UserFriends';
import { selectPerson, selectPersonsPost } from 'fearures/person/personSlice';
import { fetchPersonsInfoAsync, fetchPersonsPostsAsync, likeOrDislikePostAsync, submitCommentAsync } from 'fearures/person/personApi';
import { deletePostAsync } from 'fearures/post/postApi';
import { addRemoveFreindsAsync } from 'fearures/friends/friendApi';
import Post from 'components/Post';
import { getImageBaseUrl } from 'utils';


function UserProfile() {
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { personId } = useParams();
    const person = useSelector(selectPerson);
    const posts = useSelector(selectPersonsPost)


    useEffect(() => {
        dispatch(fetchPersonsInfoAsync({ token, personId }))
        dispatch(fetchPersonsPostsAsync({ token, personId }));
    }, [personId]);

    const postFunctions = {
        addRemoveFreinds: addRemoveFreindsAsync,
        deletePost: deletePostAsync,
        submitComment: submitCommentAsync,
        likeOrDislikePost: likeOrDislikePostAsync
    }

    return (
        <div className='w-full flex flex-col items-center relative'>
            <section className='mb-10 relative top-0 w-full '>
                <Nav />
            </section>

            {person ? <Layout >
                <Profile
                    firstName={person.firstName}
                    lastName={person.lastName}
                    picturePath={person.picturePath}
                    location={person.location}
                    occupation={person.occupation}
                    impressions={person.impressions}
                    viewedProfile={person.viewedProfile}
                    userId={person.id}
                />

                {/* person post list */}
                <div className='mt-4 bg-inherit text-inherit'>
                    {posts.map((post, index) => {
                        return <Post key={index}
                            name={post.firstName + post.lastName}
                            location={post.location}
                            profileImageUrl={getImageBaseUrl(post.userPicturePath)}
                            postImageUrl={getImageBaseUrl(post.picturePath)}
                            discreption={post.description}
                            personId={post.userId}
                            postId={post._id}
                            likes={post.likes}
                            comments={post.comments}
                            {...postFunctions}
                        />
                    })}
                </div>
                <UserFriends token={token} user={person} />
            </Layout>
                : <p>somethin wrong</p>
            }

        </ div>
    )
}

export default UserProfile