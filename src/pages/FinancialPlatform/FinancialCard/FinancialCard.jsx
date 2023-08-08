import { Link } from "react-router-dom";

const FinancialCard = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl my-5">One Platform for all Financial Solutions</h1>

            <div className="grid grid-cols-1 md:grid-3 lg:grid-cols-4 gap-10 container mx-auto">

                <Link to='/mobileRecharge'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src="https://www.bkash.com/uploaded_contents/services/home_images/02-MR_1675164134643.webp" alt="mobile" className="rounded-xl " />
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
                <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src="https://www.bkash.com/uploaded_contents/services/home_images/01-send-money_1675164089657.webp" alt="mobile" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Send money</h2>
                        <p>Send Money from bKash to any number instantly</p>
                        <div className="card-actions">
                        <Link className="text-red-700 font-semibold text-xl" to='/mobileRecharge'>Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src="https://www.bkash.com/uploaded_contents/services/home_images/03-cashout_1675164155438.webp" alt="mobile" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cash Out</h2>
                        <p>Withdraw cash anytime from the largest Agent and ATM network</p>
                        <div className="card-actions">
                        <Link className="text-red-700 font-semibold text-xl" to='/mobileRecharge'>Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src="https://www.bkash.com/uploaded_contents/services/home_images/04-payment_1675164341242.webp" alt="mobile" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Payment</h2>
                        <p>Making Payment is now much easier through the bKash App</p>
                        <div className="card-actions">
                        <Link className="text-red-700 font-semibold text-xl" to='/mobileRecharge'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FinancialCard;