import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div >
            <Carousel>
                <div>
                    <img src="https://www.bkash.com/uploaded_contents/banners/desktop/Business-Hero-Banner_Mehjabeen_1680677736196.webp" />

                </div>
                <div>
                    <img src="https://www.bkash.com/uploaded_contents/banners/desktop/05_Anti%20Fraud_1666003655336.webp" />

                </div>
                <div>
                    <img src="https://www.bkash.com/uploaded_contents/banners/desktop/website-hero-banner_1920-X-500_BANGLA_1683625439652.webp" />
                </div>
                <div>
                    <img src="https://www.bkash.com/uploaded_contents/banners/desktop/Business-Hero-Banner_Nisho_1682399227820.webp" />
                </div>
                <div>
                    <img src="https://www.bkash.com/uploaded_contents/banners/desktop/Business-Hero-Banner-3_1668700005422.webp" />
                </div>
                <div>
                    <img src="https://www.bkash.com/uploaded_contents/banners/desktop/No-1-Brand-1920x500_1675085573334.webp" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;