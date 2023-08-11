import { Link } from "react-router-dom";
import cashin from '../../../assets/cashin.jpg'
import payment from '../../../assets/payment.webp'
import sendmoney from '../../../assets/sendmoney.webp'
import cashout from '../../../assets/cashout.jpg'

const FinancialCard = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-5"><span className="border-b-4 border-orange-700 text-orange-700">Our Services</span></h1>
            <p className="mt-5 text-center">Our services are designed to make your rregular financial <br /> transactions convenient and easy</p>

            <div className="my-10 grid grid-cols-1 md:grid-3 lg:grid-cols-4 gap-10 container mx-auto">

                <Link to='/mobileRecharge'>
                    <div style={{boxShadow:'2px 2px 5px'}} className="card w-50 h-full bg-[#FFEAEA] shadow-[2px 0px 0px 0px] cursor-pointer">
                        <figure className="px-0 pt-0">
                           <img className="w-full h-[264px] rounded-md" src={cashin} alt="" />
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

                <Link to='/sendMoney'>
                <div style={{boxShadow:'2px 2px 5px'}} className="card w-50 h-full bg-[#FFEAEA] cursor-pointer">
                        <figure className="px-0 pt-0">
                           <img className="w-full h-[264px] rounded-md" src={cashout} alt="" />
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
                <div style={{boxShadow:'2px 2px 5px'}} className="card w-50 h-full bg-[#FFEAEA] cursor-pointer">
                        <figure className="px-0 pt-0">
                           <img className="w-full h-[264px] rounded-md" src={sendmoney} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl text-orange-700">Send Money</h2>
                            <p>Transfer money from one Netpay account to another</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Learn More</button>
                                 */}
                                <Link><button className="btn bg-orange-700 text-white px-6 py-2 hover:bg-orange-600 hover:text-black rounded-3xl">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to='/payment'>
                <div style={{boxShadow:'2px 2px 5px'}} className="card w-50 h-full bg-[#FFEAEA] cursor-pointer">
                        <figure className="px-0 pt-0">
                           <img className="w-full h-[264px] rounded-md" src={payment} alt="" />
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