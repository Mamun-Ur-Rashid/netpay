
const DashCashOut = () => {
    return (
        <div className="text-white text-center ">
            <h1 className="text-4xl py-3 font-bold bg-[#1ba8c6]"> Cash Out</h1>
            <div className="pl-4 mt-4" >
                <form action="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-white">Aggent Number</span>
                        </label>
                        <input type="text" placeholder="Number" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control py-2">
                        <label className="label">
                            <span className="label-text text-base text-white"> Type Amount</span>
                        </label>
                        <input type="text" placeholder="Amount" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-white"> Type Password</span>
                        </label>
                        <input type="password" placeholder="Amount" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="mt-4">
                        <button className="bg-[#1ba8c6] w-20 h-10 ">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default DashCashOut;