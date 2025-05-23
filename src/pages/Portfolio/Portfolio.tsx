import './Portfolio.css';

// import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';

function Portfolio() {
    return (
        <div className='page-content'>
            <div className="custom-container container-portfolio">
                <div className='content-title-main'>
                    <h1 className='title-main text-center'><span>LATEST</span> PROJECTS</h1>
                </div>
                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    effect = {'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 400,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    centeredSlides={true}
                    slidesPerView={1.3}
                    spaceBetween={25}
                    breakpoints={{
                        1200: {
                            slidesPerView: 2.3,
                            spaceBetween: 25,
                        },
                    }}
                >
                    <SwiperSlide>
                        {/* <Link to="/"> */}
                        <img src="https://bramdonsantiago.github.io/portfolio/img/tierra-mockup-min.png" alt="" loading='lazy' />
                        <h3>Tierra a la vista</h3>
                        <div className='content-btn'>
                            <a href="https://tierravista.iridian.co/es" target='_blank' className='btn btn-outline-terteary'>Visit project</a>
                        </div>
                        {/* </Link> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <Link to="/"> */}
                        <img src="https://bramdonsantiago.github.io/portfolio/img/heel-mockup-min.png" alt="" loading='lazy' />
                        <h3>Farmacia virtual Heel</h3>
                        <div className='content-btn'>
                            <a href="https://redisenofarmacia.iridian.co/" target='_blank' className='btn btn-outline-terteary'>Visit project</a>
                        </div>
                        {/* </Link> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <Link to="/"> */}
                        <img src="https://bramdonsantiago.github.io/portfolio/img/rifu-mockup-min.png" alt="" loading='lazy' />
                        <h3>Rifeo</h3>
                        <div className='content-btn'>
                            <a href="https://rifeo.co/" target='_blank' className='btn btn-outline-terteary'>Visit project</a>
                        </div>
                        {/* </Link> */}
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Portfolio;
