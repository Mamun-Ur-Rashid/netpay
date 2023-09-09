import SimpleChatBot from "../../chatBot/simpleChatBot/SimpleChatBot";
import FixedChat from "../fixedChat/FixedChat";

const Massage = () => {
    return (
        <div className="relative h-10">
            {/* Your main content */}

            {/* Fixed Icon and Menu */}
            {/* <FixedChat /> */}
            <SimpleChatBot />
        </div>
    );
};

export default Massage;