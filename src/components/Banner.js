import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators
        showThumbs={false}
        interval={5000}
      >
        <div className="h-96">
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div className="h-96">
          <img loading="lazy" src="/news2.jpg" alt="" />
        </div>
        <div className="h-96">
          <img loading="lazy" src="/news3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
