import React from 'react';
import useUser from '../../../../Hook/useUser';

const UserHome = () => {
    const [isUserInfo] = useUser();
    return (
        <div>
            <div><p>Total Amount: {isUserInfo.balance}</p></div>
        </div>
    );
};

export default UserHome;