import React from 'react';

const MessageParser = ({ children, actions }) => {

    const parse = (message) => {
        if (
            message.includes('hello') ||
            message.includes('Hello') ||
            message.includes('hi') ||
            message.includes('Hi')
        ) {
            actions.handleHello();
        } else if (
            message.includes('how are you') ||
            message.includes('How are you')
        ) {
            actions.handelHowAreYou();
        } else if (
            message.includes('fine') ||
            message.includes('I am fine') ||
            message.includes('Well')
        ) {
            actions.handelFine();
        } else {
            actions.handelEles()
        }
    };


    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;