import './Portfolio.css';

// import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';

function Portfolio() {
    return (
        <div className='page-content'>
            <div className="custom-container">
                <div className='content-title-main'>
                    <h1 className='title-main text-center'><span>Latest</span> projects</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={25}
                    slidesPerView={1.3}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.3,
                            spaceBetween: 25,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                >
                    <SwiperSlide>
                        {/* <Link to="/"> */}
                        <img src="https://bramdonsantiago.github.io/portfolio/img/tierra-mockup.png" alt="" loading='lazy' />
                        <h3>Tierra a la vista</h3>
                        <div className='content-btn'>
                            <a href="https://tierravista.iridian.co/es" target='_blank' className='btn btn-outline-terteary'>Visit project</a>
                        </div>
                        {/* </Link> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <Link to="/"> */}
                        <img src="https://bramdonsantiago.github.io/portfolio/img/heel-mockup.png" alt="" loading='lazy' />
                        <h3>Farmacia virtual Heel</h3>
                        <div className='content-btn'>
                            <a href="https://redisenofarmacia.iridian.co/" target='_blank' className='btn btn-outline-terteary'>Visit project</a>
                        </div>
                        {/* </Link> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <Link to="/"> */}
                        <img src="https://bramdonsantiago.github.io/portfolio/img/rifu-mockup.png" alt="" loading='lazy' />
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
