import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Home = () => {

  const images = [
    'https://res.cloudinary.com/youverify/image/upload/v1649842681/What_is_KYC_e1419d908f.jpg',
    'https://img.freepik.com/premium-vector/kyc-or-know-your-customer-with-business-verifying-the-identity-of-its-clients-concept-at-the-partners-to-be-through-a-magnifying-glass-vector-illustrator_101179-1619.jpg?w=2000'
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
