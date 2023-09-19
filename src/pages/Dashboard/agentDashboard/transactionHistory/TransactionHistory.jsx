import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const TransactionHistory =() => {
   
   const { data: agentTransactions = [], isLoading, refetch } = useQuery({
    queryKey: ['agentTransactions'],
    queryFn: async () => {
        const res = await axios.get('https://vast-rose-seahorse-hem.cyclic.cloud/agentAllTransactions');
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
                            <tr className='bg-[#4e63b8] text-lg text-white'>
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