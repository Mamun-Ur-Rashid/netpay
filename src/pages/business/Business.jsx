import { useEffect } from "react";
import Massage from "../liveChat/massage/Massage";
import BusinessBanner from "./BusinessBanner";
import Title from "../../shared/title/Title";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";


const Business = () => {
    const img1 = 'https://i.pinimg.com/originals/48/79/86/487986c17560a8ed1afdc55e480e5be2.png'

    const img2 = 'https://media.istockphoto.com/id/1291353608/vector/call-center-hotline-worker-smiling-helpline-operator-with-headset.jpg?s=612x612&w=0&k=20&c=-x00c5PIbk0d9cIss8qha5AqMeA6MF5vUciEnWMhsL0='

    const img3 = 'https://static.vecteezy.com/system/resources/previews/026/088/859/non_2x/business-people-team-meeting-and-research-resume-profile-for-job-interview-and-hiring-cartoon-character-design-concept-flat-illustration-vector.jpg'

    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                <BusinessBanner />
            </div>
            <div className="container mx-auto p-8 pt-10">
                <Title title={'Business'} subTitle={`Get's Your Business Solution Useing NetPay.`} />

                {/* start specceh */}
                {/* <div>
                    <div data-aos=""
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        className="bg-[#4e63b8]  my-10  lg:rounded-full">
                        <div className=" px-3 md:px-8 py-2 md:py-10 ">
                            <h1 className="text-white text-center font-semibold text-2xl md:text-5xl">Welcome to NetPay&apos;s Business</h1>
                            <p className="text-white text-sm md:text-base lg:text-base my-3 md:my-6 lg:my-14">Welcome to NetPay&apos;s Business Solutions – the ultimate destination for modernizing and optimizing your business&apos;s financial operations. At NetPay, we understand the intricacies and demands of running a successful enterprise, and that&apos;s why we&apos;ve tailored our platform to cater specifically to your needs. With our comprehensive suite of tools and services, businesses of all sizes can streamline their financial processes, enhance efficiency, and unlock new avenues for growth. Whether you&apos;re a startup striving to establish your market presence or an established corporation looking to expand globally, NetPay offers a range of features designed to empower your business. Seamlessly send and receive payments, manage invoices, and monitor transactions – all within a secure and user-friendly environment. Our cross-border transfer capabilities ensure that international payments are as effortless as domestic ones. </p>

                        </div>
                    </div>
                </div> */}

                {/* Online business section */}
                <div>
                    <div data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        className="bg-[#4e63b8]  my-10 block lg:flex rounded-2xl">
                        <div className="w-full lg:w-1/2  ">
                            <img src={img1} alt="" />
                        </div>
                        <div className=" lg:w-1/2 px-3 md:px-8 py-2 md:py-10 ">
                            <h1 className="text-white text-center font-semibold text-2xl md:text-5xl">Online Business</h1>
                            <p className="text-white text-sm md:text-base lg:text-xl my-3 md:my-6 lg:my-14">NetPay provides the easiest and safest method for accepting online payments from your customers. You will get access to cutting-edge solutions like payment gateway, tokenized checkout, subscription payments, instant refunds, direct charges, B2C payout, and APIs. </p>
                            <Link to='/signup'>
                                <Button text={'Sign Up Now'}></Button>
                            </Link>
                        </div>


                    </div>
                </div>

                <Title title={'Agent'} subTitle={`Became a agent and grow your business with NetPay.`} />

                {/* Agent  */}
                <div>
                    <div data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        className="bg-[#4e63b8]  my-10 block lg:flex rounded-2xl">
                        <div className=" lg:w-1/2 px-3 md:px-8 py-2 md:py-10 ">
                            <h1 className="text-white text-center font-semibold text-2xl md:text-5xl">Agent</h1>
                            <p className="text-white text-sm md:text-base lg:text-xl my-3 md:my-6 lg:my-14">NetPay With their NetPay Agent Accounts, around 300,000 agents are providing services like Cash In, Cash Out, Pay Bill, Savings to more than 60 million NetPay customers easily and conveniently. As a NetPay agent, you can grow the business every day and be the most valued partner of NetPay. </p>
                            <Link to='/signup'>
                                <Button text={'Sign Up Now'}></Button>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2  ">
                            <img src={img2} alt="" />
                        </div>



                    </div>
                </div>

                <Title title={'Corporate '} subTitle={`Get's your Corporate & Enterprise and grow your business with NetPay.`} />

                {/* Agent  */}
                <div>
                    <div data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        className="bg-[#4e63b8]  my-10 block lg:flex rounded-2xl">
                        <div className=" lg:w-1/2 px-3 md:px-8 py-2 md:py-10 ">
                            <h1 className="text-white text-center font-semibold text-2xl md:text-5xl">Corporate & Enterprise</h1>
                            <p className="text-white text-sm md:text-base lg:text-xl my-3 md:my-6 lg:my-14">NetPay Corporate Disbursement and Collection Solutions enable you to digitally disburse money to employees, DSOs, retailers, and partners to facilitate day-to-day business operations, and receive payments from consumers, retailers, and distributors. </p>
                            <Link to='/signup'>
                                <Button text={'Sign Up Now'}></Button>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2  ">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>

                <Massage />
            </div>
        </>
    );
};

export default Business;