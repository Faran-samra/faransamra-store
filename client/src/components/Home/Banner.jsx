import React from 'react';
import "./Banner.css";
import Carousel from 'react-material-ui-carousel';

const data = [
    "https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Tfszeu0DL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71IHJLPGC2L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71CtV-IknvL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71zpBcCjKPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61K28C55p4L._SX3000_.jpg",
    
];

const Banner = () => {
    return (
        <Carousel 
            className='Carousel'
            autoPlay={true}
            animation='slide'
            navButtonsAlwaysVisible={true}
            indicators={false}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                  
                    color: "white",
                    width: "40px", // Set width of buttons
                    height: "40px", // Set height of buttons
                    padding: 25, // Remove padding
                    marginRight: 19,
                    marginLeft: 1,
                    marginTop: -250
                }
            }}
        >
            {data.map((image, i) => (
                <img key={i} src={image} alt={`Banner ${i}`} className='Caroimage' />
            ))}
        </Carousel>
    );
}

export default Banner;
