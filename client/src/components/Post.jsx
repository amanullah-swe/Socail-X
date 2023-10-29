import React, { useState } from 'react'
import Profileinfo from './Profileinfo';
import { useDispatch, useSelector } from 'react-redux';


function Post({ name, location, profileImageUrl, postImageUrl, discreption, personId, postId, likes, comments, addRemoveFreinds, deletePost, submitComment, likeOrDislikePost }) {

    const [commentSection, setCommentSection] = useState({
        isClick: false,
        comment: ''
    })

    const { token, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleOnClickComment = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setCommentSection((prev) => {
            return {
                ...prev,
                isClick: !prev.isClick
            }
        })
    }

    const handleOnChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const value = event.target.value;
        setCommentSection((prev) => {
            return {
                ...prev,
                comment: value
            }
        })
    }

    const handleOnClickLike = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(likeOrDislikePost({ token, userId: user._id, postId }))
    }

    const handleCommentSubmite = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (commentSection.comment) { dispatch(submitComment({ token, userId: user._id, postId, comment: commentSection.comment })) }
        else { console.log('enter a comment') };
        setCommentSection(prev => { return { ...prev, comment: '' } })
    }

    const handleDeletePost = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(deletePost({ postId, token, userId: user._id }))
    }

    const addOrRemoveFriends = (personId) => {
        if (!token) return;
        dispatch(addRemoveFreinds({ token, personId, userId: user._id }))
    }

    return (
        <div className=' bg-background dark:bg-dark-background text-inherit shadow-xl rounded-xl my-4 py-4 px-2'>
            {/* profile */}
            <div className='flex justify-between'>
                <Profileinfo name={name} profileImage={profileImageUrl} text={location} personId={personId} addOrRemoveFriends={personId !== user._id ? addOrRemoveFriends : null} />
                {personId === user._id ? <button onClick={handleDeletePost} className='h-8 w-8 bg-secondary dark:bg-dark-secondary flex items-center justify-center rounded-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="15"
                        viewBox="0 -960 960 960"
                        width="15"
                        className='fill-text dark:fill-dark-text'><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" /></svg>
                </button> : null}
            </div>


            {/* post section */}
            <div className=''>
                <p className='font-body text-base mt-2'> {discreption}</p>
                <div className=' shadow-md overflow-hidden rounded-lg mt-2'>
                    <img className='w-full' src={postImageUrl} alt='profile' />
                </div>
            </div>


            {/* interaction section like ,likes comment and share */}
            <div className='w-full'>
                <div className='w-full flex mt-4 justify-between'>
                    <div className='flex gap-5 items-center justify-evenly'>
                        <div className='flex items-center justify-center gap-1' onClick={handleOnClickLike}>
                            <svg className={`${likes[user._id] ? "fill-[#0ba5b0]" : "fill-text dark:fill-dark-text"} `} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M716-120H272v-512l278-288 39 31q6 5 9 14t3 22v10l-45 211h299q24 0 42 18t18 42v81.839q0 7.161 1.5 14.661T915-461L789-171q-8.878 21.25-29.595 36.125Q738.689-120 716-120Zm-384-60h397l126-299v-93H482l53-249-203 214v427Zm0-427v427-427Zm-60-25v60H139v392h133v60H79v-512h193Z" /></svg>
                            <p>{Object.keys(likes).length}</p>
                        </div>

                        <div className='intraction-item' onClick={handleOnClickComment}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 -960 960 960"
                                width="20"
                                className='fill-text dark:fill-dark-text'><path d="M270-400h420q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-460H270q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T270-400Zm0-130h420q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-590H270q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T270-530Zm0-130h420q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-720H270q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T270-660ZM140-240q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v668q0 19.688-18.5 27.344Q843-117 829-131L720-240H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z" /></svg>
                        </div>
                    </div>
                    <div className='self-end'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="20"
                            className='fill-text dark:fill-dark-text'><path d="M727-80q-47.5 0-80.75-33.346Q613-146.693 613-194.331q0-6.669 1.5-16.312T619-228L316-404q-15 17-37 27.5T234-366q-47.5 0-80.75-33.25T120-480q0-47.5 33.25-80.75T234-594q23 0 44 9t38 26l303-174q-3-7.071-4.5-15.911Q613-757.75 613-766q0-47.5 33.25-80.75T727-880q47.5 0 80.75 33.25T841-766q0 47.5-33.25 80.75T727-652q-23.354 0-44.677-7.5T646-684L343-516q2 8 3.5 18.5t1.5 17.741q0 7.242-1.5 15Q345-457 343-449l303 172q15-14 35-22.5t46-8.5q47.5 0 80.75 33.25T841-194q0 47.5-33.25 80.75T727-80Zm.035-632Q750-712 765.5-727.535q15.5-15.535 15.5-38.5T765.465-804.5q-15.535-15.5-38.5-15.5T688.5-804.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm-493 286Q257-426 272.5-441.535q15.5-15.535 15.5-38.5T272.465-518.5q-15.535-15.5-38.5-15.5T195.5-518.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm493 286Q750-140 765.5-155.535q15.5-15.535 15.5-38.5T765.465-232.5q-15.535-15.5-38.5-15.5T688.5-232.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5ZM727-766ZM234-480Zm493 286Z" /></svg>
                    </div>
                </div>



                {/* commnet box */}
                {commentSection.isClick &&
                    <div className='mt-4  px-3'>
                        <form onSubmit={handleCommentSubmite} className='flex gap-2 my-4'>
                            <input className='w-full px-2 bg-inherit text-inherit border rounded-md'
                                type="text"
                                onChange={handleOnChange}
                                value={commentSection.comment}

                            />
                            <button className=' bg-primary dark:bg-dark-primary rounded-lg px-2 py-1' type='submit'> comment</button>
                        </form>
                        <div className='comments'>
                            {comments.map((comment, index) => {
                                return <p className='font-body text-base leading-7' key={index}>{comment}</p>
                            })}
                        </div>
                    </div>}
            </div>
        </div>
    )
}
export default Post;