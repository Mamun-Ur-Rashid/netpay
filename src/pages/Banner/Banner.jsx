import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    return (
        <div >
            <Carousel>
                <div>
                    <img src="https://media.gettyimages.com/id/1366223220/vector/send-money-related-web-banner-line-style-modern-design-vector-illustration-for-web-banner.jpg?s=612x612&w=0&k=20&c=rnkvfeyASDyAXqIhnQDmqBswwopim6hlsNmjUp4zeGM=" />
                    
                </div>
                <div>
                    <img src="https://media.gettyimages.com/id/1267210633/vector/mobile-payment-isometric-banner-design.jpg?s=612x612&w=0&k=20&c=BdkhBGAoIA0rKnD9nyjlJFaRBi3OIopWVXcSGCsthUQ=" />
                    
                </div>
                <div>
                    <img src="https://media.gettyimages.com/id/1157981987/vector/money-related-banner-template-with-line-icons-modern-vector-illustration-for-advertisement.jpg?s=612x612&w=0&k=20&c=ndAEpWLKyQOHYnJ5OgnOmgoPGZTXz74QmOzUe1w2z5A=" />
                </div>
                <div>
                    <img src="https://media.gettyimages.com/id/1366223220/vector/send-money-related-web-banner-line-style-modern-design-vector-illustration-for-web-banner.jpg?s=612x612&w=0&k=20&c=rnkvfeyASDyAXqIhnQDmqBswwopim6hlsNmjUp4zeGM=" />
                </div>
                <div>
                    <img src="https://media.gettyimages.com/id/1366470731/vector/mobile-payment-related-web-banner-line-style-modern-design-vector-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cMlwJY1Fv7xFyod9nqM2_xxxCqp9wQJU-kWjK91TGwU=" />
                </div>
                <div>
                    <img src="https://media.gettyimages.com/id/896216558/vector/card-payment-line-infographic-web-banner.jpg?s=612x612&w=0&k=20&c=ijo8VAnVQeXvzWy32fPsghydZ9keSG5is7TSr3YW8g0=" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;