import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    // reply of hello
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        updateState(botMessage)
    };

    // reply how are you
    const handelHowAreYou = () => {
        const botMessage = createChatBotMessage('I am fine, And You?')
        updateState(botMessage)
    };

    // reply fine 
    const handelFine = () => {
        const botMessage = createChatBotMessage('Thank You.')
        updateState(botMessage)
    };

    // else function 
    const handelEles = () => {
        const botMessage = createChatBotMessage(`Dear Customer, I did not understand your query. Please ask your question again`)
        updateState(botMessage)
    };


    // const afterFirstMessage = () => {
    //     const message = createChatBotMessage('Dont understant your query. ask again.')
    //     updateState(message)
    // };

    // const initialAction = () => {
    //     const message = createChatBotMessage('Ask Your Question')
    //     updateState(message)
    // };

    //  common function for update state all
    const updateState = (message) => {
        setState((pre) => ({
            ...pre,
            messages: [...pre.messages, message]
        }))
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handelHowAreYou,
                        handelFine,
                        handelEles
                        // initialAction,
                        // afterFirstMessage,

                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;