import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPosts, setUpoadSections } from 'fearures/auth/authSlice';
import { uploadPostsAsync } from 'fearures/post/postApi';
function Uploadfiles() {

    const [image, setImage] = useState(null);
    const [text, setText] = useState('');


    const dispatch = useDispatch();
    const { token, user } = useSelector(state => state.auth);

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            if (image && text) {
                const formData = new FormData();
                formData.append('picture', image);
                formData.append('description', text);
                formData.append('userId', user._id);
                console.log(formData);
                dispatch(uploadPostsAsync({ token, formData }));
                dispatch(setUpoadSections({ uploadSections: false }));
            }
            else {
                console.log('Please select an image and text');
                return;
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setImage(null);
        setText('');
        dispatch(setUpoadSections({ uploadSections: false }));

    }
    return (
        <div className=' w-full bg-inherit h-screen relative top-0 shadow-lgar rounded-xl overflow-hidden mb-2'>
            <form onSubmit={handleOnSubmit} className=' flex flex-col'>

                <button className='px-4 py-2  w-fit rounded-xl mb-4 bg-primary' type='button' onClick={handleOnClick}>x</button>

                <div className=''>
                    <input
                        placeholder='Whats in your mind'
                        value={text}
                        className='text-base font-body text-inherit'
                        onChange={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setText(e.target.value);
                        }} />
                </div>

                {image ? <div className=' rounded-xl overflow-hidden mt-4'><img src={URL.createObjectURL(image)} alt="" /></div>
                    : <div className='flex items-center justify-center w-full h-96'>
                        <input type="file"
                            id='post'
                            hidden
                            onChange={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setImage(e.target.files[0]);
                            }
                            } />
                        <div className=''>
                            <label htmlFor="post" >Upload image</label>
                        </div>
                    </div>
                }

                <div className=' self-end flex gap-3'>
                    <button
                        className='px-4 py-2  w-24 rounded-xl mb-4 bg-secondary'
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setImage(null);
                        }}>Cancel</button>

                    <button
                        className='px-4 py-2  w-24 rounded-xl mb-4 bg-primary'
                        type='submit'
                    >Post</button>
                </div>
            </form>
        </div>
    )
}
export default Uploadfiles;