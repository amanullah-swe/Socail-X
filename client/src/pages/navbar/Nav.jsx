import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Nav() {
    const navigate = useNavigate();

    const toogleTheme = () => {
        const isDarkMode = document.getElementById('root').classList.contains('dark');
        if (isDarkMode) {
            document.getElementById('root').classList.remove('dark'); // If it's currently dark, remove the class
        } else {
            document.getElementById('root').classList.add('dark'); // If it's not dark, add the class
        }
    }

    const handleLogoClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate('/home');
    }

    return (
        <div className='text-text dark:text-dark-text bg-background dark:bg-dark-background shadow-xl w-full flex justify-center'>
            <div className='h-12 flex justify-between w-full max-w-7xl max-sm:flex-col'>
                <div className='flex flex-row items-center justify-start gap-2 w-[50%] max-sm:w-full min-w-[0px]'>
                    <h1 className='text-2xl font-bold font-heading cursor-pointer' onClick={handleLogoClick} >
                        Socail X
                    </h1>

                    <input
                        type="text"
                        className='w-[60%] text-text dark:text-dark-text bg-background dark:bg-dark-background border outline-none p-0.5 rounded-lg text-base font-body'
                    />
                    {/* search icom */}
                    <div className='dark:fill-dark-text fill-text'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="25"
                            viewBox="0 -960 960 960" width="24"
                        >
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </div>
                </div>

                {/* links */}
                <div className='flex flex-shrink-0 justify-end items-center gap-5 max-sm:hidden'>
                    <div className='dark:fill-dark-text fill-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" onClick={toogleTheme} viewBox="0 -960 960 960" width="24"><path d="M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z" /></svg>
                    </div>
                    <div className='dark:fill-dark-text fill-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="24"><path d="M306-523q17 0 28.5-11.5T346-563q0-17-11.5-28.5T306-603q-17 0-28.5 11.5T266-563q0 17 11.5 28.5T306-523Zm177 0q17 0 28.5-11.5T523-563q0-17-11.5-28.5T483-603q-17 0-28.5 11.5T443-563q0 17 11.5 28.5T483-523Zm170 0q17 0 28.5-11.5T693-563q0-17-11.5-28.5T653-603q-17 0-28.5 11.5T613-563q0 17 11.5 28.5T653-523ZM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z" /></svg>
                    </div>
                    <div className='dark:fill-dark-text fill-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="24"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>
                    </div>
                    <div className='dark:fill-dark-text fill-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="24"><path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;