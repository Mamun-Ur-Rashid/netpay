import { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { BsPlus } from "react-icons/bs";
import { MdSubdirectoryArrowRight } from "react-icons/md";


const FixedChat = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (

        <div>
            {
                menuVisible ?
                    <div>
                        <div className="fixed bottom-2 right-2 w-[370px] md:w-[400px] h-[500px] md:h-[550px] bg-slate-300 shadow-md rounded-md p-4">
                            {/* Menu content */}
                            <div className='flex justify-between items-center h-16 '>
                                <img src="" alt="" />
                                <h1 className='font-bold text-xl md:text-3xl text-[#17aac9]'> NETPAY</h1>
                                <div>
                                    <button className='text-4xl bg-white' onClick={toggleMenu}> <GrClose /></button>
                                </div>
                            </div>
                            <hr />
                            <div className=' h-[340px] md:h-[400px]  overflow-y-auto'>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>

                                {/*  need contained here */}
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                                <p>dfdfd</p>
                            </div >
                            <hr />
                            <div className='flex'>
                                <BsPlus className='text-4xl ' />
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                                <MdSubdirectoryArrowRight className='text-4xl' />
                            </div>

                        </div>
                    </div> :
                    <div>
                        <div
                            className="fixed bottom-2 right-2 bg-blue-500 w-32 md:w-40 h-8 md:h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
                            onClick={toggleMenu}
                        >
                            {/* Icon (You can use an icon library or an image here) */}
                            <h1 className='font-bold'> Live Chat</h1>
                        </div>
                    </div>
            }
        </div>
    );
};

export default FixedChat;