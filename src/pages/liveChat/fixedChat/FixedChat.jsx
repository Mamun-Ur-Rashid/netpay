import { useState } from 'react';
import { GrClose } from "react-icons/gr";
import InputEmoji from "react-input-emoji";
import { io } from 'socket.io-client';


// const socket = io('http://localhost:5000');

const FixedChat = () => {
    // this messages array comes from server... { now use testing parpes }
    const messages = [
        { id: 1 },
        { chatId: 1 },
        {
            text: [
                'hello', 'how are you', 'i am fine'
            ]
        },
    ];

    const [menuVisible, setMenuVisible] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    console.log(newMessage);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const socket = io();
    console.log(socket);

    // Send message here..
    const handelSend = (e) => {
        e.preventDefault()
        const message = {
            senderId: 'hi',
            text: newMessage,
            chatId: 'comming soon',
        };

        // Emit the message to the server
        socket.emit('paglaMessage', message);

        // Clear the input field after sending
        setNewMessage('');
        console.log('btn', message)
    };

    return (
        <div>
            {
                menuVisible ?
                    <div>
                        <div className="fixed bottom-2 right-2 w-[370px] md:w-[500px] h-[500px] md:h-[550px] bg-slate-300 shadow-md rounded-md p-4">
                            {/* Menu content */}
                            <div className='flex justify-between items-center h-16 '>
                                <img src="" alt="" />
                                <h1 className='font-bold text-xl md:text-3xl text-[#17aac9]'> NETPAY</h1>
                                <div>
                                    <button className='text-4xl bg-white' onClick={toggleMenu}> <GrClose /></button>
                                </div>
                            </div>
                            <hr />
                            {/* Show massage..... */}
                            <div className=' h-[340px] md:h-[400px]  overflow-y-auto'>
                                {/* {
                                    messages.map(message => console.log(message.text))
                                } */}
                            </div >
                            <hr />
                            {/* chat-sender */}
                            <div className='flex'>
                                <div></div>
                                <InputEmoji
                                    value={newMessage}
                                    onChange={setNewMessage}
                                    cleanOnEnter
                                    // onEnter={handleOnEnter}
                                    placeholder="Type a message"
                                />
                                <button className='text-black text-2xl bg-slate-500' onClick={handelSend} > Send</button>
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