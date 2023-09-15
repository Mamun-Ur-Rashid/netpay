import { Link } from 'react-router-dom';
import logo from '../../assets/update.png'



const Footer = () => {
  return (
    <div className='pt-20'>

      <footer className="footer px-10 pt-10 pb-4 bg-[#26608a] text-white">
        <div className="pt-5">
          <img src={logo} className='w-32 h-24 bg-white rounded-lg' />
          <p className=" text-2xl font-semibold">A fast an easy way of <br /> transferring money.</p>
        </div>
        <div className='text-xl'>
          <span className="footer-title">Services</span>
          <Link to='/services/send-money' className="link link-hover">Send Money</Link>
          <Link to='/services/cash-out' className="link link-hover">Cash Out</Link>
          <Link to='/services/payment' className="link link-hover">Payment</Link>
          <Link className="link link-hover">Pay Bill</Link>
          <Link className="link link-hover">Transfer Money</Link>
        </div>
        <div className='text-xl'>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contract us </a>
          <a className="link link-hover">Career</a>
        </div>
        <div className='text-xl'>
          <span className="footer-title">Others</span>
          <a className="link link-hover">Treams</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover"> Securety </a>
        </div>
      </footer>
      <hr />
      <footer className="footer footer-center py-5 bg-[#26608a] pt-4 text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by Netpay Industries Ltd.</p>
        </div>
      </footer>

    </div>
  );
};

export default Footer;