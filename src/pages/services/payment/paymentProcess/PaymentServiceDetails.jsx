import Title from '../../../../shared/title/Title';

const PaymentServiceDetails = () => {
    return (
        <div className="mt-4 md:mt-10">
            <Title title={'Payment Service Details'}></Title>
            <div className="p-8 md:p-10 bg-gray-100 rounded-lg shadow-gray-200 shadow-lg text-black">
                <p>NetPay&apos;s payment solutions offer a convenient and secure way to make transactions, whether you&apos;re shopping online, paying bills, or sending money to loved ones. Our versatile payment options empower you to manage your finances with ease.
                </p>
                <p>At NetPay, we&apos;re dedicated to making your financial transactions as convenient as possible. Our Add Money feature offers a simple and secure way to top up your account balance, enabling you to manage your funds effortlessly.

                    Whether you&apos;re adding funds for online shopping, sending money to loved ones, or simply ensuring you have a backup for unexpected expenses, NetPay&apos;s Add Money feature puts you in control.
                </p>
                <h1 className="text-2xl font-semibold pt-3 pb-1 text-[#17aac9]">How Our Payment System Works</h1>

                <ul className="py-1">
                    <li>1. Choose from various transaction options, such as online purchases, bill payments, or person-to-person transfers.</li>
                    <li>2. Input the necessary information, such as recipient details or bill amount.</li>
                    <li>3. Double-check the transaction details and verify the payment amount.</li>
                    <li>4. Our advanced security measures ensure that your transactions are protected.</li>
                    <li>5. Once confirmed, your transaction is processed swiftly, providing you with real-time updates.</li>
                </ul>

                <h1 className="text-2xl font-semibold pt-3 pb-1 text-[#17aac9]">Benefits of Using NetPay for Payments</h1>

                <ul className="py-1">
                    <li>1. Our user-friendly platform makes transactions straightforward and hassle-free.</li>
                    <li>2. Whether you prefer cards, bank transfers, or digital wallets, we&apos;ve got you covered.</li>
                    <li>3. Your payment details are encrypted, and transactions are secured with cutting-edge technology.</li>
                    <li>4. Stay informed about the status of your transactions as they happen.</li>
                </ul>

                <p className="py-2">
                    NetPay&apos;s Payment feature is designed to simplify your financial interactions. Whether you&apos;re shopping, paying bills, or transferring money, our platform ensures a smooth and secure experience. Say goodbye to complex processes and embrace seamless payments with NetPay.
                </p>

            </div>
        </div>
    );
};

export default PaymentServiceDetails;