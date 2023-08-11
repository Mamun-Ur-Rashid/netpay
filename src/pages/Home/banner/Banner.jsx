import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../../assets/bannar.png"

const Banner = () => {
    return (
        <div >
            <Carousel>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <img src={img} />
                </div>


            </Carousel>
        </div>
    );
};

export default Banner;