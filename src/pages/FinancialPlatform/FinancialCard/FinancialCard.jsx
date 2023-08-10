import { Link } from "react-router-dom";

const FinancialCard = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl my-5">One Platform for all Financial Solutions</h1>

            <div className="my-10 grid grid-cols-1 md:grid-3 lg:grid-cols-4 gap-10 container mx-auto">

                <Link to='/mobileRecharge'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.NnxUeTqipwoDkadhWjGRHwHaEK&pid=Api&P=0&h=220" alt="mobile" className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mobile Recharge</h2>
                            <p>Recharge any number and get the best offer</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Learn More</button>
                                 */}
                                <Link className="text-red-700 font-semibold text-xl" to='/mobileRecharge'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/sendMoney'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.t_lyfA4Pj8rILeKP_sNGlwHaE7&pid=Api&rs=1&c=1&qlt=95&w=150&h=99" alt="mobile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Send money</h2>
                            <p>Send Money from netpay to any number instantly</p>
                            <div className="card-actions">
                                <Link className="text-red-700 font-semibold text-xl" to='/sendMoney'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to='/cashOut'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.l3jhiW51U0zDlgYmaFvavgHaEK&pid=Api&rs=1&c=1&qlt=95&w=202&h=113" alt="mobile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cash Out</h2>
                            <p>Withdraw cash anytime from the largest Agent and ATM network</p>
                            <div className="card-actions">
                                <Link className="text-red-700 font-semibold text-xl" to='/cashOut'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to='/payment'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.cJ6knShXSr08kzE2JiqCtgHaD4&pid=Api&P=0&h=220" alt="mobile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Payment</h2>
                            <p>Making Payment is now much easier through the Netpay App</p>
                            <div className="card-actions">
                                <Link className="text-red-700 font-semibold text-xl" to='/payment'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default FinancialCard;