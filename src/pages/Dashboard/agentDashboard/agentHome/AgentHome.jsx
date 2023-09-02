import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AgentHome = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [isUserInfo, setUserInfo ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/allUsers/${user?.email}`);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [user]);
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-1 mr-5 mt-6 text-white'>
                <div className='m-5 pl-3 pt-4 w-[90%] h-38 bg-[#33C49D] rounded-xl text-2xl'>
                   <p className='text-center font-bold pb-4'> Total Users <br /> <small className='text-5xl'>1222</small></p> 
                </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-38 bg-[#C44933] rounded-xl text-2xl'>
                    <p className='text-center font-bold pb-4'> Total Transactions </p>
                </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-38 bg-[#3348C4] rounded-xl text-2xl'> 
                    <p className='text-center font-bold pb-4'>  Total Agents <br /><small>180</small></p>
                </div>
                <div className='m-5 mr-5 pl-3 pt-8 w-[90%] h-38 bg-[#0F101A] rounded-xl text-2xl'> 
                    <p className='text-center font-bold pb-4'>   Total Amount (Tk) <br /> 
                    <small className='text-5xl'>{isUserInfo.balance}</small> </p>
                </div>
            </div>
        </div>
    );
};

export default AgentHome;