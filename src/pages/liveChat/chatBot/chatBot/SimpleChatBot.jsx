
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import { createChatBotMessage } from 'react-chatbot-kit';
import MessageParser from '../messageParser/MessageParser';
import ActionProvider from '../actionProvider/ActionProvider';
import { useState } from 'react';
import { GrClose } from "react-icons/gr";



const SimpleChatBot = () => {
    const config = {
        initialMessages: [createChatBotMessage(`Hello world`)],
        botName: 'NetPay'
    };

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return (
        <div>
            {
                menuVisible ?
                    <div>
                        <div className="fixed bottom-2 right-2 bg-slate-300 shadow-md rounded-md p-4" >
                            <div>
                                <button className='text-4xl bg-white' onClick={toggleMenu}> <GrClose /></button>
                            </div>
                            <div>
                                <Chatbot
                                    config={config}
                                    messageParser={MessageParser}
                                    actionProvider={ActionProvider}

                                />
                            </div>
                        </div>
                    </div> :
                    <div>
                        <div
                            className="fixed bottom-2 right-2 bg-blue-500 w-32 md:w-40 h-8 md:h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
                            onClick={toggleMenu}
                        >
                            <h1 className='font-bold'> Live Chat</h1>
                        </div>
                    </div>
            }

        </div>
    );
};

export default SimpleChatBot;