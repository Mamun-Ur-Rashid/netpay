import AllNews from "./AllNews";

const LatestNewes = () => {
    return (
        <div className=" mt- md:mt-">
            <h1 className="text-center font-bold text-4xl md:text-5xl text-[#17aac9]">Latest News</h1>
            <h3 className="mt-1 text-sm py-2 text-center text-slate-200">You can add more news items and details as needed to create an  engaging Latest News section for your platform.</h3>
            <AllNews></AllNews>

        </div>
    );
};

export default LatestNewes;