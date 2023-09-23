
import { useQuery } from "@tanstack/react-query";
import useUser from "../../../../Hook/useUser";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";

const TransactionHistory = () => {

    const [user] = useUser();
    const [axiosSecure] = useAxiosSecure();
    const { data: agentTransactions = [], isLoading, refetch } = useQuery({
        queryKey: ['agentTransactions', user?.number],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agentTransactions/${user?.number}`);
            // console.log(res.data);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-4xl my-6 text-center font-bold'>All Transactions!</h2>
            <div>
                <div className="overflow-x-auto px-4 ">
                    <table className="table p-8 rounded-xl">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#4e63b8] text-lg text-white'>
                                <th>#</th>
                                <th>Receiver Name</th>
                                <th> Account Number</th>
                                <th>Amount</th>
                                <th>Transaction Id</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                agentTransactions.map((agentTransaction, index) => <tr
                                    key={agentTransaction._id} className="bg-slate-400">
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