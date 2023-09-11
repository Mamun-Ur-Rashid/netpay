
const StartBtn = ({ props, text1, }) => {

    const initialActions = (props) => {
        // props.initialAction();
    };

    return (
        <div>
            <button
                onClick={() => initialActions()}
                className="text-white p-2 rounded-lg bg-[#57a4df]">{text1}</button>
            <button className="text-white p-2 rounded-lg bg-[#57a4df] ml-2">Hello</button>
        </div>
    );
};

export default StartBtn;