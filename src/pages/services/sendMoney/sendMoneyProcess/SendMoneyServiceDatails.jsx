import Title from "../../../../shared/title/Title";

const SendMoneyServiceDatails = () => {
    return (
        <div className="mt-4 md:mt-8">
            <Title title={' Send Money Service Details'}></Title>
            <div className="bg-[#1B2654] text-slate-200 p-8 md:p-10">
                <p>Send money service allows you to send or transfer money from your NetPay account to any other NetPay account.
                </p>
                <ul className="py-1">
                    <li>1. Open NetPay send money menu</li>
                    <li>2. Enter the NetPay account number of the recipient and the amount you want to send</li>
                    <li>3. Enter one word as a reference</li>
                    <li>4. Enter your NetPay mobile menu PIN to confirm the transaction</li>
                </ul>
                <h4>Send money done! Both you and the recipient will receive a confirmation message from NetPay.</h4>
                <h1 className="text-2xl font-semibold pt-3 pb-1 text-[#17aac9]">Applicable Terms and Conditions:</h1>
                <p>Existing NetPay Customers (Customer A) may send money to a Potential New Customer (Customer B) through ‘Send Money’ and if Customer B successfully opens NetPay Account within 3 days from the date of receipt of the money, Customer B shall be entitled to avail the money received.</p>
                <p>The feature shall start from April 10, 2021 and shall remain valid until further notice.
                    In the event Customer B fails to open NetPay Account within 3 days from the date of receipt of the money, Customer B shall not be eligible to avail the money and the money sent shall be returned to Customer A after the said timeline.
                    Customer A shall bear all responsibility for checking the correct NetPay Account number and whether the recipient has an existing NetPay Account or not.
                </p>
                <p>Opening NetPay Account shall be considered successful upon successful pin setup and once the Customer account is deemed a full profile in accordance with NetPay’s internal policies.
                    NetPay reserves the right to change/modify terms & conditions or cancel the feature at any time without giving any prior notice.
                    Any decision taken by NetPay with respect to the feature, shall be in the sole discretion of NetPay and shall be deemed final.</p>
            </div>
        </div>
    );
};

export default SendMoneyServiceDatails;