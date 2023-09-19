import Title from "../../../../shared/title/Title";

const AddMoneyServiceDetalis = () => {
    return (
        <div className="mt-4 md:mt-10">
            <Title title={'Add Money Service Details'}></Title>
            <div className="p-8 md:p-10 bg-gray-100 rounded-lg shadow-gray-200 shadow-lg text-black">
                <p>Adding money to your NetPay account should be hassle-free and secure. That&apos;s why we&apos;ve designed this feature to provide you with peace of mind, knowing that your financial transactions are conducted with the highest level of security and efficiency.

                    Experience the convenience of managing your funds on your terms. With NetPay&apos;s Add Money feature, you&apos;re always in control of your financial journey.
                </p>
                <p>At NetPay, we&apos;re dedicated to making your financial transactions as convenient as possible. Our Add Money feature offers a simple and secure way to top up your account balance, enabling you to manage your funds effortlessly.

                    Whether you&apos;re adding funds for online shopping, sending money to loved ones, or simply ensuring you have a backup for unexpected expenses, NetPay&apos;s Add Money feature puts you in control.
                </p>
                <h1 className="text-2xl font-semibold pt-3 pb-1 text-[#17aac9]">Procedure to Add Money/ Cash In</h1>


                <ul className="py-1">
                    <li>1. Go to the nearest Nagad Uddokta point.</li>
                    <li>2. Log in to your Netpay account select the Add Money option.</li>
                    <li>3. Provide Information.</li>
                    <li>4. Type your PIN number. (Always keep your PIN secret)</li>
                    <li>5. Pay The Amoun.</li>
                    <li>6. Receive Balance From Uddokta.</li>
                    <li>7. Cash-in done!</li>

                </ul>
                Both you and the Uddokta will receive a confirmation message.

            </div>
        </div>
    );
};

export default AddMoneyServiceDetalis;