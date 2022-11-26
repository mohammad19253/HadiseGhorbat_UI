import React from "react";
import Slider  from "react-slick";
import CardA from "../CardA/CardA";
import { Container } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const MySlider=( {slides } )=>{
    var settings = {
        infinite: true,
        speed: 500,
       
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1190,
            settings: {
                arrows:true,
                nextArrow: <NavigateNextIcon style={{fill:'red'}}/>,
                prevArrow:  <div>test</div>,
                slidesToShow: 2,
                slidesToScroll:2,
                infinite: true,
                dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
                dots: true,
                arrows:true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          },
        ]
      };
      return (
        <Container maxWidth='lg'>
          <Slider {...settings}>
            {slides.map(({ userName, description , profileImage ,id , userBanner, width , height})=>{
                return <div key={id} >
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <CardA  image={profileImage}  banner={userBanner} title={userName} description={description}   height={height}/>
                    </div>
                </div>
            })}
          </Slider>
        </Container>
      );
}
export default  MySlider