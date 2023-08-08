
const Footer = () => {
    return (
        <div >
            <footer className="footer py-20 p-10 bg-neutral text-neutral-content text-xl mx-auto">

                <div>
                    <img className="w-32" src="https://tse1.mm.bing.net/th?id=OIP.C-uJDyVtwmkmqVS3vAPvvAHaE8&pid=Api&rs=1&c=1&qlt=95&w=154&h=102" alt="" />

                    <p className="text-sm">bKash provides fast, secure and convenient <br></br> money transfer and payment services via mobile <br></br> phone to the people of Bangladesh</p>
                </div>

                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Campaigns</a>
                    <a className="link link-hover">Customer Support</a>
                    <a className="link link-hover">Complaint Cell</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About BKash</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Career</a>
                </div>
                <div>
                    <span className="footer-title">Business</span>
                    <a className="link link-hover">Be a bKash Supplier</a>
                    <a className="link link-hover">Be a bKash Merchant</a>
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
                    <p>Copyright © 2023 - All right reserved by BKash Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;