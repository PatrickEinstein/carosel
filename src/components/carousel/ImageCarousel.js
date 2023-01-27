import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carosel.css";
import { animetxts } from "./image";

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
  };

  console.log(images);
  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} className="picture" />
          </div>
        ))}
      </Slider>

      <Slider className="txts" {...settings2}>
        {animetxts.map((item) => (
          <div key={item.id}>
            <h1> {item.alt}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}

/*

*/
