import React from "react";
import Slider from "react-slick";

// Import slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider1 from "../../images/1.png";
import Slider2 from "../../images/2.png";

const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: true,
    pauseOnHover: true,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      image: Slider1,
      title: "Celebrity Women's Kabaddi League",
      description:
        "Experience the adrenaline-pumping action of the Celebrity Women's Kabaddi League! Watch the fiercest women athletes battle it out in an electrifying showdown of strength, strategy, and speed. This global spectacle redefines the sport, empowering women and inspiring the next generation of champions!",
    },
    {
      id: 2,
      image: Slider2,
      title: "Revolutionizing Women's Kabaddi",
      description:
        "Step into the next era of Kabaddi with CWKL – a high-octane league that redefines tradition with speed, strategy, and global appeal. Witness fearless athletes push the limits, delivering non-stop action that captivates fans worldwide. Join the movement and be part of a sports revolution!",
    },
  ];

  return (
    <div className="container-fluid p-0">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="position-relative">
            {/* Image */}
            <div className="position-relative w-100">
              <img
                src={slide.image}
                alt={slide.title}
                className=" w-100 slider-img"
              />
              {/* Overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

              {/* Text Content */}
              <div className="container">
                <div className="position-absolute slider-text  text-white w-50">
                  <span className="font2 d-none d-sm-block">
                    Welcome To Women's Kabaddi League
                  </span>
                  <h2 className="font1 colr">{slide.title}</h2>
                  <p className="font2 d-none d-sm-block">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <p className="my-5 py-5"></p> */}

      {/* Custom Styles */}
      <style>{`
        .slick-dots {
          bottom: 15px;
        }
        .slick-dots li button:before {
          color: white;
          font-size: 10px;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
        .slick-prev,
        .slick-next {
          z-index: 1;
          width: 40px;
          height: 40px;
        }
        .slick-prev {
          left: 20px;
        }
        .slick-next {
          right: 20px;
        }
      `}</style>
    </div>
  );
};

export default Sliders;
