import logo from '../../assets/logo5.png'


const Footer = () => {
    return (
        <div className='bg-[#070c33]'>
            <footer className="footer  p-10 bg-neutral text-neutral-content text-xl mx-auto">

                <div>
                    <img className="w-4/6" src={logo} alt="" />

                    <p className="text-sm">Netpay provides fast, secure and convenient <br></br> money transfer and payment services via mobile <br></br> phone to the people of Bangladesh</p>
                </div>

                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Campaigns</a>
                    <a className="link link-hover">Customer Support</a>
                    <a className="link link-hover">Complaint Cell</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About Netpay</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Career</a>
                </div>
                <div>
                    <span className="footer-title">Business</span>
                    <a className="link link-hover">Be a Netpay Supplier</a>
                    <a className="link link-hover">Be a Netpay Merchant</a>
                    <a className="link link-hover">Digital Payroll</a>
                </div>
                <div>
                    <span className="footer-title">Others</span>
                    <a className="link link-hover">Terms</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Security Tips</a>
                </div>
            </footer>

            <hr />

            <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Netpay Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;