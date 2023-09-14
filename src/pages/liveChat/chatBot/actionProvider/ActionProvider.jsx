import React from 'react';
import { Link } from 'react-router-dom';


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

    // reply send money
    const handelSendMoney = () => {
        const myString = `Send money service allows you to send or transfer money from your NetPay account to any other NetPay account.
        1. Open NetPay send money menu
        2. Enter the NetPay account number of the recipient and the amount you want to send
        3. Enter one word as a reference
        4. Enter your NetPay mobile menu PIN to confirm the transaction
        Send money done! Both you and the recipient will receive a confirmation message from NetPay.
        For More Details clicked here  `;

        const botMessage = createChatBotMessage(<> {myString} <hr /> <Link className='' to="/services/send-money">Send Money Page</Link> </>)
        updateState(botMessage)
    };

    // reply cash out 
    const handelCashOut = () => {
        const myString = `At NetPay, we understand the importance of having access to your funds when you need them. That's why we've designed our Cash Out feature to provide you with a seamless and convenient way to withdraw your money whenever and wherever you are. 
        Procedure to ‘Cash Out’
        1. Go to the nearest Nagad Uddokta point.
        2. Log in to your Netpay account select the Cash Out option
        3. Scan the QR code or type in the number of the Uddokta.
        4. Type your PIN number. (Always keep your PIN secret)
        5. Type your Cash Out Amount.
        6. Type your PIN number. (Always keep your PIN secret)
        7. Type your Cash Out Amount.
        8. Confirm the transaction
        9. Cash-out done!`
        const botMessage = createChatBotMessage(<> {myString} <hr /> <Link className='' to="/services/cash-out">Cash Out </Link> </>)
        updateState(botMessage)
    };

    // reply mobile recharge
    const handelMobileRecharge = () => {
        const myString = `At NetPay, we're here to simplify your mobile recharge experience. Our Mobile Recharge feature allows you to top up your phone's balance quickly and conveniently, ensuring you stay connected without any interruptions. Whether you need to make an urgent call, send a text, or use mobile data, our Mobile Recharge feature ensures you have the means to communicate effortlessly.
        Procedure to Mobile Recharge
        1. Go to the NetPay side.
        2. Log in to your Netpay account select the Money Recharge option.
        3. Select Recharge type.
        4. Select you Number.
        5. Select The Amoun.
        6. Type your PIN number. (Always keep your PIN secret)
        7. Mobile Recharge done!  
        `
        const botMessage = createChatBotMessage(<> {myString} <hr /> <Link className='' to="/services/mobile-recharge"> Mobile Recharge </Link> </>)
        updateState(botMessage)
    };


    // else function 
    const handelEles = () => {
        const botMessage = createChatBotMessage(`Dear Customer, I did not understand your query. Please ask your question again`)
        updateState(botMessage)
    };



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
                        handelEles,
                        handelSendMoney,
                        handelCashOut,
                        handelMobileRecharge
                        // initialAction,
                        // afterFirstMessage,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;