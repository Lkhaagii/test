import React from "react";
import Slider1 from "react-slick";
import "./About1.css"

const About1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return(
        <div className="Undesen">
            <h1>Улиралын онцлох</h1>
            <div>
            <Slider1 {...settings}>
                <div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150349/600x0xwebp/ulirliin_ontslokh_angilal-owliin_sport.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a' alt="/"/>
                    </div>
                    <div className="B">
                        <h5>Өвлийн спорт</h5>
                    </div>
                </div>

                <div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150350/400x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=d636ca11e190c8f5e16a0856159642c24658d8a2' alt="/"/>
                    </div>
                    <div className="B">
                        <h5>Гадуур хувцас</h5>
                    </div>
                </div>

                <div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150351/600x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a' alt="/"/>
                    </div>
                    <div className="B">
                        <h5>Өвлийн гутал</h5>
                    </div>
                </div>

                <div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150352/600x0xwebp/owoldoo_beldey_angilal-agaar_tsewershuulegch.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a' alt="/"/>
                    </div>
                    <div className="B">
                        <h5>Агааржуулагч & Агаар цэвэршүүлэгч</h5>
                    </div>
                </div>

                <div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150866/600x0xwebp/huuhdiin_dulaan_tsamts.jpg?h=b1ecf70b2f5efef268b61dbfbc33585efad2661a' alt="/"/>
                    </div>
                    <div className="B">
                        <h5>Хүүхдийн дулаан цамц</h5>
                    </div>
                </div>

                <div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150354/400x0xwebp/owoldoo_beldey_angilal-malgai_oroolt.jpg?h=d636ca11e190c8f5e16a0856159642c24658d8a2' alt="/"/>
                    </div>
                    <div className="B">
                        <h5>Малгай & Ороолт бээлий</h5>
                    </div>
                </div>

                <div>
                    <div className="Banner">
                    <img src='https://cdn.cody.mn/img/150355/400x0xwebp/ulirliin_ontslokh_angilal-vitamin.jpg?h=d636ca11e190c8f5e16a0856159642c24658d8a2' alt="/"/>
                    </div>
                    <div className="B">
                        <h5>Витамин & Эрдэс бодис</h5>
                    </div>
                </div>

            </Slider1>
            </div>
        </div>
    )
}
export default About1