import React from 'react'
import Profileinfo from './Profileinfo';
import { getImageBaseUrl } from 'utils';


function Profile({ firstName, lastName, picturePath, location, occupation, impressions, viewedProfile, personId }) {
    return (
        <div className='w-full text-text dark:text-dark-text bg-background dark:bg-dark-background shadow-xl h-fit pb-4 p-2 rounded-xl'>
            <div className='flex flex-col items-start justify-start w-full'>
                <Profileinfo name={firstName + ' ' + lastName} profileImage={getImageBaseUrl(picturePath)} text={'100 frends'} personId={personId} />
                <div className='hr-line'></ div>
                <div className=' flex flex-col  justify-center w-full h-full;'>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                            className=' fill-text dark:fill-dark-text'><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                        <span>{location}</span>
                    </div>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                            className=' fill-text dark:fill-dark-text'><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>

                        <span>{occupation}</span>
                    </div>
                </div>
            </div >
            <div className='hr-line'></div>
            <div className=''>
                <div className='flex justify-between'>
                    <span>impression</span>
                    <span>{impressions}</span>
                </div>
                <div className='flex justify-between'>
                    <span>viewed profile</span>
                    <span>{viewedProfile}</span>
                </div>
            </div>
            <div className='hr-line'></div>
            <div className=''>
                <h3>social media </h3>

                <div>
                    <div className='flex justify-between'>
                        <h5>twitter</h5>
                        <p>link</p>
                    </div>
                    <div className='flex justify-between'>
                        <h5>instagram</h5>
                        <p>link</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile