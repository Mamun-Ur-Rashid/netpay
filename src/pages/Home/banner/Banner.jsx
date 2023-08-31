import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../../../assets/bb.jpg"


const Banner = () => {
    return (
        <div >
            <div className="carousel w-full mb-4 md:mb-8">
                <img className='h-44 md:h-[450px]' src={img2} alt="" />
            </div>
        </div>
    );
};

export default Banner;