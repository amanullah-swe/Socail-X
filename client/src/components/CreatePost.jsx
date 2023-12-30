import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Uploadfiles from './Uploadfiles.jsx';
import { setUpoadSections } from 'fearures/auth/authSlice.js';
import { baseImageUrl } from 'store/constant/index.js';
function CreatePost() {
    const { picturePath } = useSelector(state => state.auth.user);
    const { uploadSections } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleUploadImageBtn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setUpoadSections({ uploadSections: true }));
        console.log('showS');
    }
    return (
        <div className=' w-full flex flex-col gap-3 text-text dark:text-dark-text bg-background dark:bg-dark-background shadow-xl h-fit pb-4 p-3 rounded-xl'>
            {uploadSections ? <Uploadfiles /> : null}

            {/* input box */}
            <div className='flex flex-row w-full justify-center items-center gap-2'>
                <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <img src={baseImageUrl + picturePath} className='profile-image' alt="" />
                </div>
                <div className='w-[80%] border-5 px-2 py-1 bg-inherit '>
                    <input type="text "
                        className='w-full bg-inherit h-8 rounded-xl px-2 border' />
                </div>
            </div>


            {/* media section */}
            <div className='flex flex-row justify-between px-2 '>
                <div className=' flex items-center flex-wrap justify-center hover:cursor-pointer' onClick={handleUploadImageBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" className='fill-text dark:fill-dark-text' viewBox="0 -960 960 960" width="25"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z" /></svg>
                    <span className='hover:cursor-pointer' onClick={handleUploadImageBtn}>Image</span>
                </div>
                <div className='flex items-center flex-wrap justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" className='fill-text dark:fill-dark-text' viewBox="0 -960 960 960" width="25"><path d="m140-800 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18Zm0 212v368h680v-368H140Zm0 0v368-368Z" /></svg>
                    <span className='hover:cursor-pointer'>Clip</span>
                </div>
                <div className='flex items-center flex-wrap justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" className='fill-text dark:fill-dark-text' viewBox="0 -960 960 960" width="25"><path d="M480-423q-43 0-72-30.917-29-30.916-29-75.083v-251q0-41.667 29.441-70.833Q437.882-880 479.941-880t71.559 29.167Q581-821.667 581-780v251q0 44.167-29 75.083Q523-423 480-423Zm0-228Zm-30 531v-136q-106-11-178-89t-72-184h60q0 91 64.288 153t155.5 62Q571-314 635.5-376 700-438 700-529h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521-529v-251q0-17-11.788-28.5Q497.425-820 480-820q-17.425 0-29.212 11.5Q439-797 439-780v251q0 19 11.5 32.5T480-483Z" /></svg>
                    <span className='hover:cursor-pointer'>Audio</span>
                </div>
                <div className='flex items-center flex-wrap justify-center'>
                    <button className=' bg-primary dark:bg-dark-primary w-22 px-4 py-2 rounded-md'>POST</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;
