import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Home = () => {

  const images = [
    'https://www.csb.co.in/sites/all/themes/csb/edm/KYC-Emailer/images/slide2.gif',
    'https://www.reliancesmartmoney.com/images/default-source/default-album/blog_image-2a.png?sfvrsn=0'
  ];

  const responsive = {
    responsiveClass: true,
    loop:true,
    autoplay:true,
    nav: true,
    dots: true,
    smartSpeed: 300,
    navClass: ['prev', 'next'],
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,
        },
        1200:{
            items:1,
        }
    },
  }

  return (
    <div>
        <div>
            <OwlCarousel className="owl-theme" {...responsive}>
            {images.map((img)=>(
                <div key={img} className='hover-underline-banner' >
                    <img src={img} alt="" />
                </div>
            ))}
            </OwlCarousel>
        </div>
    </div>
  )
}
