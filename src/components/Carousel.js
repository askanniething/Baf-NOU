import React from 'react';
import './App.css';
import Slider from 'react-slick';

function Carousel() {

    const photos = [{
            name: "Photo 1",
            url: "./images/photo1.jpg",
            text: "Eighty billion pieces of clothing are consumed globally every year."
        },
        {
            name: "Photo 2",
            url: "./images/photo2.jpg",
            text: "Nine out of ten factory workers cannot afford enough food for themselves and their families."
        }, {
            name: "Photo 3",
            url: "./images/photo3.jpg",
            text: "Only 10% of the clothes people donate to thrift stores or charities get sold, the rest goes to landfill."
        }, {
            name: "Photo 4",
            url: "./images/photo4.jpg",
            text: "Only 9 percent of Australian fashion brands pay their workers a living wage."
        }
    ]

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        className: "slides"
    }

    return ( 
        <div className = "car">
        <Slider {...settings}>
          {photos.map((photo) =>{
            return(
               <div className = "cont">
                  <img className = "carousel-img" src={photo.url}alt=""/>
                  <div className="overlay-carousel">
                      <h2>Did You Know?</h2>
                      <p>{photo.text}</p>
                  </div>
                </div>
                        )
            })}

        </Slider>
        </div>


    );
}

export default Carousel;