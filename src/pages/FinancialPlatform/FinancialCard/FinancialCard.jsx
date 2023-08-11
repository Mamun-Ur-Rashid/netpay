import { Link } from "react-router-dom";
import cashin from '../../../assets/cashin.jpg'

const FinancialCard = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-5"><span className="border-b-4 border-orange-700 text-orange-700">Our Services</span></h1>
            <p className="mt-5 text-center">Our services are designed to make your rregular financial <br /> transactions convenient and easy</p>

            <div className="my-10 grid grid-cols-1 md:grid-3 lg:grid-cols-4 gap-10 container mx-auto">

                <Link to='/mobileRecharge'>
                    <div className="card w-50 h-full bg-[#FFEAEA] shadow-2xl cursor-pointer">
                        <figure className="px-0 pt-0">
                           <img className="w-full rounded-md" src={cashin} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl text-orange-700">Cash In</h2>
                            <p>Depositing money into Customer Netpay Account</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Learn More</button>
                                 */}
                                <Link><button className="btn bg-orange-700 text-white px-6 py-2 hover:bg-orange-600 hover:text-black rounded-3xl">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/cashOut'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src={cashout} alt="mobile" className="rounded-xl" />
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

                <Link to='/sendMoney'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src="https://www.bkash.com/uploaded_contents/services/home_images/01-send-money_1675164089657.webp" alt="mobile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl text-orange-700">Cash Out</h2>
                            <p>Withdraw money from your Netpay Account</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Learn More</button>
                                 */}
                                <Link><button className="btn bg-orange-700 text-white px-6 py-2 hover:bg-orange-600 hover:text-black rounded-3xl">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to='/cashOut'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src="https://www.bkash.com/uploaded_contents/services/home_images/03-cashout_1675164155438.webp" alt="mobile" className="rounded-xl" />
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
                            <img src="https://www.bkash.com/uploaded_contents/services/home_images/04-payment_1675164341242.webp" alt="mobile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl text-orange-700">Bill Pay</h2>
                            <p>Pay your bills through Netpay bill pay service</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Learn More</button>
                                 */}
                                <Link><button className="btn bg-orange-700 text-white px-6 py-2 hover:bg-orange-600 hover:text-black rounded-3xl">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default FinancialCard;