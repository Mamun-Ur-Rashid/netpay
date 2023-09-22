
const Title = ({ title, subTitle }) => {
    return (
        <div className="">
            <h1 className="text-center font-bold text-3xl md:text-5xl text-[#4e63b8]">{title}</h1>
            <p className="mt-1 pt-2 md:pt-4 text-center text-black font-semibold">{subTitle}</p>
        </div>
    );
};

export default Title;