import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Profileinfo({ profileImage, name, text, personId, addOrRemoveFriends }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goToUserProfile = useCallback(() => {
        navigate(`/profile/${personId}`);
    }, []);

    const handleAddOrRemoveFriend = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addOrRemoveFriends(personId);
    }
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <div className='w-16 h-16 rounded-full overflow-hidden' onClick={goToUserProfile}>
                    <img src={profileImage} className='profile-image' alt="" />
                </div>
                <div >
                    <h3 className=' font-heading text-lg' onClick={goToUserProfile}>{name}</h3>
                    <p className=' font-body text-base opacity-70'>{text}</p>
                </div>
            </div>
            <div>{
                addOrRemoveFriends && <button onClick={handleAddOrRemoveFriend} className='w-10 h-10 bg-primary dark:bg-dark-primary flex items-center justify-center rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M474-486q26-32 38.5-66t12.5-79q0-45-12.5-79T474-776q76-17 133.5 23T665-631q0 82-57.5 122T474-486Zm216 326v-94q0-51-26-95t-90-74q173 22 236.5 64T874-254v94H690Zm110-289v-100H700v-60h100v-100h60v100h100v60H860v100h-60Zm-485-32q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM0-160v-94q0-35 18.5-63.5T68-360q72-32 128.5-46T315-420q62 0 118 14t128 46q31 14 50 42.5t19 63.5v94H0Zm315-381q39 0 64.5-25.5T405-631q0-39-25.5-64.5T315-721q-39 0-64.5 25.5T225-631q0 39 25.5 64.5T315-541ZM60-220h510v-34q0-16-8-30t-25-22q-69-32-117-43t-105-11q-57 0-104.5 11T92-306q-15 7-23.5 21.5T60-254v34Zm255-411Zm0 411Z" /></svg>
                </button>
            } </div>
        </div>
    )
}

export default Profileinfo;