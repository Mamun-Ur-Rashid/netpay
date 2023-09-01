import Title from "../../../../shared/title/Title";

const CashOutServiceDetails = () => {
    return (
        <div className="mt-4 md:mt-8">
            <Title title={'Cash Out Service Details'}></Title>
            <div className="bg-[#1B2654] text-slate-200 p-8 md:p-10">
                <p>At NetPay, we understand the importance of having access to your funds when you need them. That&apos;s why we&apos;ve designed our Cash Out feature to provide you with a seamless and convenient way to withdraw your money whenever and wherever you are.

                    Whether you&apos;re a traveler in need of local currency, a freelancer looking to convert earnings, or simply looking to withdraw funds for daily expenses, our Cash Out feature has got you covered. With a network of partner ATMs and cash withdrawal points, you can access your funds securely and without hassle.
                </p>
                <h1 className="text-2xl font-semibold pt-3 pb-1 text-[#17aac9]">Procedure to ‘Cash Out’</h1>

                <ul className="py-1">
                    <li>1. Go to the nearest Nagad Uddokta point.</li>
                    <li>2. Log in to your Netpay account select the Cash Out option</li>
                    <li>3. Scan the QR code or type in the number of the Uddokta.</li>
                    <li>4. Type your PIN number. (Always keep your PIN secret)</li>
                    <li>5. Type your Cash Out Amount.</li>
                    <li>6. Type your PIN number. (Always keep your PIN secret)</li>
                    <li>7. Type your Cash Out Amount.</li>
                    <li>8. Confirm the transaction</li>
                    <li>9. Cash-out done!</li>
                </ul>

                <h1 className="text-2xl font-semibold pt-3 pb-1 text-[#17aac9]">Applicable Terms and Conditions:</h1>
                <p>Applicable VAT is determined by the government

                    The Cash out charge of the app has been rounded up to 11.48 taka per thousand and USSD charge has been rounded up to 15.00 taka per thousand.
                    Ref to the above conditions, in case of any conflict between the charges displayed between App, USSD (sms), and Nagad website, the charges mentioned in Nagad official website shall prevail.

                    Under present circumstances, please pay heed and abide by the health regulations by the government, stay well and stay with Nagad.</p>
                <p>With NetPay&apos;s Cash Out feature, managing your finances becomes even more flexible and user-centric. Experience the freedom to access your funds when and where you need them, making your financial journey smoother than ever.
                </p>
                <p className="py-2">
                    Both you and the Uddokta will receive a confirmation message. Count the amount the Uddokta gives you to make sure it is correct. Sign the Uddokta register before leaving the counter.
                </p>

            </div>
        </div>
    );
};

export default CashOutServiceDetails;