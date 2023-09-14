
const Title = ({ title, subTitle }) => {
    return (
        <div >
            <h1 className="text-center font-bold text-5xl md:text-5xl text-[#4e63b8]">{title}</h1>
            <p className="mt-1 pt-4 pb-10 text-center text-black font-semibold">{subTitle}</p>
        </div>
    );
};

export default Title;