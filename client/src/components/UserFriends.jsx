import React, { memo, useEffect } from 'react'
import Profileinfo from './Profileinfo';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFreindsAsync, fetchFriendsAsync } from 'fearures/friends/friendApi';
import { selectFriends } from 'fearures/friends/friendsSlice';
import { getImageBaseUrl } from 'utils';



function UserFriends({ token, user }) {

    const dispatch = useDispatch();
    const friends = useSelector(selectFriends);


    const instance = axios.create();
    instance.defaults.headers.common['Authorization'] = token;


    useEffect(() => {
        dispatch(fetchFriendsAsync({ token, userId: user._id }))
    }, [token, user])



    const addOrRemoveFriends = (personId) => {
        // personId: means a person on which profile is click and user is person who clicked
        console.log(personId)
        // console.log(user._id);
        if (token) dispatch(addRemoveFreindsAsync({ token, personId, userId: user._id }));
    }

    return (
        <div className='w-full min-h-[100px] bg-background dark:bg-dark-background text-inherit shadow-2xl px-2 py-4 rounded-lg flex flex-col gap-5 h-fit'>
            {friends?.map((friend, index) => {
                return (
                    <Profileinfo
                        key={index}
                        profileImage={getImageBaseUrl(friend.picturePath)}
                        name={`${friend.firstName} ${friend.lastName}`}
                        text={friend.location}
                        personId={friend._id}
                        addOrRemoveFriends={addOrRemoveFriends}
                    />
                )
            })}
        </div>
    )
};

export default UserFriends;