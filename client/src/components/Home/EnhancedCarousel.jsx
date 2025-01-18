import React from "react";
import Slider from "react-slick";
import "./EnhancedCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EnhancedCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Carousel items data
  const items = [
    {  img: "https://img.drz.lazcdn.com/static/pk/p/9b3fe0575a045e4725e029714f05aafd.jpg_400x400q80.jpg_.webp" },
    {  img: "https://img.drz.lazcdn.com/g/kf/S04c0fa5e60a34a91b96d9ec27a158f4aU.jpg_720x720q80.jpg_.webp" },
    {  img: "https://img.drz.lazcdn.com/static/pk/p/7bbdd42fd865313c07831e8b30af364f.png_400x400q75.png_.webp" },
    {  img: "https://img.drz.lazcdn.com/static/pk/p/eaeb3e3b1efe072c85ee2d5efd3650a4.jpg_400x400q75.jpg_.webp" },
    {  img: "https://img.drz.lazcdn.com/static/pk/p/5d25752581b999aa54d547f766cc553a.jpg_400x400q80.jpg_.webp" },
    {img:"https://img.drz.lazcdn.com/static/pk/p/40f37560a24d1998f3a125e63803979e.png_400x400q80.png_.webp"}
   
  ];

  return (
    <div className="carousel-container">
      <h2>Here Come Holiday Specials</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EnhancedCarousel;
