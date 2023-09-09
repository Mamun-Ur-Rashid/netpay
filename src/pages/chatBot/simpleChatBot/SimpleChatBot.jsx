import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
// import config from "./configs/chatbotConfig";
import MessageParser from "../messagePersar/MessagePersar";
import ActionProvider from "../actionProvider/ActionProvider";
import 'react-chatbot-kit/build/main.css'

const SimpleChatBot = () => {
    const config = {
        initialMessages: [createChatBotMessage(`Hello Every one`)],
    };


    return (
        <div className="App">
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default SimpleChatBot;