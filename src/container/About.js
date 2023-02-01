import React from "react";
import Slider from "react-slick";
import "./About.css"

const About = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div>
            <Slider {...settings}>
                
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/154788/1100x0xwebp/Choijoo_header_banner_web.jpg?h=341081019ed6805d811c298801d5df49ca6b57b3' alt="/"/>
                    </div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/154797/2600x0xwebp/Lalaland_header_banner_web.jpg?h=09e579afc56e5e46bd5ca690e6dba4642e271098' alt="/"/>
                    </div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150571/1300x0xwebp/deed_lig_header_banner_web.jpg?h=0b76a8611491ebdb6d457fdccd12fbe4c9d2cdf5' alt="/"/>
                    </div>

               
  
            </Slider>
        </div>
    )
}
export default About