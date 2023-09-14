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
        }
        else if (
            message.includes('how are you') ||
            message.includes('How are you')
        ) {
            actions.handelHowAreYou();
        }
        else if (
            message.includes('fine') ||
            message.includes('I am fine') ||
            message.includes('Well')
        ) {
            actions.handelFine();
        }
        else if (
            message.includes('send money') ||
            message.includes('I want to Send Money here') ||
            message.includes('Transfer money to another account')
        ) {
            actions.handelSendMoney();
        }
        else if (
            message.includes('cash out') ||
            message.includes('I want to Cash Out here') ||
            message.includes('how to withdrow money')
        ) {
            actions.handelCashOut();
        }
        else if (
            message.includes('mobile recharge') ||
            message.includes('I want to Mobile Recharge here') ||
            message.includes('how to recharge mobile')
        ) {
            actions.handelMobileRecharge();
        }


        else {
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