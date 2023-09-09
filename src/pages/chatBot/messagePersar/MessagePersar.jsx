import React from 'react';

const MessagePersar = ({ children, actions }) => {
    const parse = (message) => {
        console.log(message);
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

export default MessagePersar;