import axios from "axios";
import useUser from "../../../../Hook/useUser";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const TransactionHistory =() => {
    // const [isUserInfo] = useUser();


   const { data: agentTransactions = [], isLoading, refetch } = useQuery({
    queryKey: ['agentTransactions'],
    queryFn: async () => {
        const res = await axios.get('https://attractive-hoodie-newt.cyclic.app/agentAllTransactions');
        console.log(res.data);
        return res.data;
    }
})
    return (
        <div>
             <h2 className='text-4xl my-6 text-center font-bold'>All Transactions!</h2>
            <div>
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#2727ab] text-lg text-white'>
                                <th>#</th>
                                <th>User/Admin Name</th>
                                <th>User/Admin Account</th>
                                <th>Amount</th>
                                <th>Transaction Id</th>
                                <th>TimesTamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                agentTransactions.map((agentTransaction, index) => <tr
                                    key={agentTransaction._id}>
                                    <th>{index + 1}</th>
                                    <th>{agentTransaction.name}</th>
                                    <th>{agentTransaction.userAccount}</th>
                                    <th>{agentTransaction.amount} Tk</th>
                                    <th>{agentTransaction._id}</th>
                                    <th>{agentTransaction.timestamp}</th>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;