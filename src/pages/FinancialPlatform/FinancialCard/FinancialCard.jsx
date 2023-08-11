import { Link } from "react-router-dom";
import cashin from '../../../assets/cashin.jpg'
import cashout from '../../../assets/cashout.jpg'
import sendMoney from '../../../assets/sendmoney.webp'
import payment from "../../../assets/payment.webp"

const FinancialCard = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-5"><span className="border-b-4 border-orange-700 text-orange-700">Our Services</span></h1>
            <p className="mt-5 text-center">Our services are designed to make your rregular financial <br /> transactions convenient and easy</p>

            <div className="my-10 grid grid-cols-1 md:grid-3 lg:grid-cols-4 gap-10 container mx-auto">

                <Link to='/mobileRecharge'>
                    <div className="card w-50 h-full  shadow-2xl cursor-pointer">
                        <figure className="px-0 pt-0">
                            <img className="" src={cashin} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl text-orange-700">Cash In</h2>
                            <p>Recharge any number and get the best offer</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Learn More</button>
                                 */}
                                <Link className="text-red-700 font-semibold text-xl" to='/mobileRecharge'>Learn More</Link>
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
                            <img src={sendMoney} alt="mobile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Send money</h2>
                            <p>Send Money from bKash to any number instantly</p>
                            <div className="card-actions">
                                <Link className="text-red-700 font-semibold text-xl" to='/sendMoney'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Link>





                <Link to='/payment'>
                    <div className="card w-50 h-full bg-base-100 shadow-2xl cursor-pointer">
                        <figure className="px-10 pt-10">
                            <img src={payment} alt="mobile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Payment</h2>
                            <p>Making Payment is now much easier through the bKash App</p>
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