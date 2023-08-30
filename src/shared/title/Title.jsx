
const Title = ({ title, subTitle }) => {
    return (
        <div >
            <h1 className="text-center font-bold text-4xl md:text-5xl text-[#17aac9]">{title}</h1>
            <p className="mt-1 text-sm py-2 text-center text-slate-200">{subTitle}</p>
        </div>
    );
};

export default Title;