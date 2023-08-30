import { Link } from "react-router-dom";
import img from "../../../assets/blog-banner.jpg"
import Button from "../../../shared/button/Button";

const AllNews = () => {

    const img2 = 'https://us.123rf.com/450wm/peopleimages12/peopleimages122303/peopleimages12230332555/201180237-their-meeting-is-in-full-swing-a-laptop-on-a-table-with-businesspeople-having-a-meeting-in-the.jpg?ver=6'

    return (
        <div className='md:flex justify-between my-4 md:my-10 gap-9'>

            <div className="relative inline-block group w-full md:w-1/3 md:py-0 bg-[#1B2654] h-80 shadow-2xl ">
                <img
                    src={img2}
                    alt="Image"
                    className="w-full h-full absolute opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="relative text-[#e3e1e7] text-justify py-4 px-4 ">
                    <p className="text-xs"> Date :  22 Aug, 2023</p>
                    <p className="text-left text-2xl font-semibold py-1  text-[#17aac9]"> New Feature Launch: Instant Money Transfers</p>
                    <p className="text-sm md:text-sm py-1 pb-">We are excited to announce the launch of our new feature that enables instant money transfers. With this enhancement, you can now send and receive funds in real-time, making transactions faster and more convenient than ever before. Say goodbye to waiting periods and hello to seamless money transfers across the globe.</p>
                    <Link to='/blog'>
                        <Button text={'Read More'}></Button>
                    </Link>
                </div>
            </div>

            <div className="relative inline-block group w-full md:w-1/3 md:py-0 bg-[#1B2654] h-96 md:h-80  shadow-2xl ">
                <img
                    src={img2}
                    alt="Image"
                    className="w-full h-full absolute opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="relative text-slate-200 text-justify py-4 px-4">
                    <p className="text-xs"> Date :  08 sep, 2023</p>
                    <p className="text-left text-2xl font-semibold py-1 hover: text-[#17aac9]"> Partner Spotlight: Collaborating for Success</p>
                    <p className="text-sm md:text-sm py-1">We&apos;re proud to spotlight our collaboration with [Partner Name], a leading innovator in the fintech industry. Together, we&apos;re committed to providing you with enhanced financial solutions, expanding your options, and ensuring that your financial journey is seamless and efficient. Stay tuned for exciting developments stemming from this partnership.</p>
                    <Link to='/blog'>
                        <Button text={'Read More'}></Button>
                    </Link>
                </div>
            </div>

            <div className="relative inline-block group w-full md:w-1/3 md:py-0 bg-[#1B2654] h-80 shadow-2xl ">
                <img
                    src={img2}
                    alt="Image"
                    className="w-full h-full absolute opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="relative text-slate-200 text-justify py-4 px-4 ">
                    <p className="text-xs"> Date :  10 Aug, 2023</p>
                    <p className="text-left text-2xl font-semibold py-1 hover: text-[#17aac9]"> Customer Feedback: Your Insights Shape NetPay</p>
                    <p className="text-sm md:text-sm py-1">We value your feedback and are excited to share how your insights have influenced our platform&apos;s development. Based on your suggestions, we&apos;ve introduced several improvements to enhance your experience, from user interface refinements to streamlined navigation. Your input is instrumental in making NetPay even better.</p>
                    <Link to='/blog'>
                        <Button text={'Read More'}></Button>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default AllNews;