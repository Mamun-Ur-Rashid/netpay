import { Link } from 'react-router-dom';
import logo from '../../assets/update.png'



const Footer = () => {
    return (
      <div className='pt-20'>

        <footer className="footer px-10 pt-10 bg-[#26608a] text-white">
          <div className="pt-5">
            <img src={logo} className='w-32 h-24 bg-white rounded-lg' />
            <p className=" font-semibold">A fast an easy way of <br /> transferring money.</p>
          </div> 
          <div>
            <span className="footer-title">Services</span> 
            <a className="link link-hover">Photography Classes</a>           
          </div> 
          <div>
            <span className="footer-title">Company</span> 
            <a className="link link-hover">Address : Chittagong</a>
          </div> 
          <div>
            <span className="footer-title">Others</span> 
            <a className="link link-hover">Address : Chittagong.</a>
          </div> 
        </footer>

        <footer className="footer footer-center py-5 bg-[#26608a] pt-8 text-white">
          <div>
            <p>Copyright © 2023 - All right reserved by Netpay Industries Ltd.</p>
          </div>
        </footer>

      </div>
    );
};

export default Footer;