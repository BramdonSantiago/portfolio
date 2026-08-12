import './Portfolio.css';

// import { Link } from 'react-router-dom';

import ScatteringText from '../../components/ScatteringText/ScatteringText';

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
                    <ScatteringText
                        Tag="h1"
                        className="title-main text-center"
                        textParts={[
                            { text: "LATEST", scatter: true },
                            { text: " PROJECTS" },
                        ]}
                    />
                    {/* <h1 className='title-main text-center'><span>LATEST</span> PROJECTS</h1> */}
                </div>
                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 400,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    centeredSlides={true}
                    slidesPerView={1.3}
                    spaceBetween={0}
                    breakpoints={{
                        1200: {
                            slidesPerView: 2.3,
                            spaceBetween: 0,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='singular-project'>
                            <img src="https://bramdonsantiago.github.io/portfolio/img/tierra-mockup-min.png" alt="" loading='lazy' />
                            <h3>Tierra a la vista</h3>
                            <p className='description-platform'>Real estate platform</p>
                            <p className='tag-line'>
                                <span className='technology'>Symfony</span>
                                <span className='technology'>JavaScript</span>
                                <span className='technology'>HTML</span>
                                <span className='technology'>CSS</span>
                                <span className='technology'>Sass</span>
                                <span className='technology'>Dark Mode</span>
                            </p>
                            <div className='content-btn'>
                                <a href="https://tierravista.iridian.co/es" target='_blank' className='btn btn-outline-terteary'>Visit Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='singular-project'>
                            <img src="https://bramdonsantiago.github.io/portfolio/img/heel-mockup-min.png" alt="" loading='lazy' />
                            <h3>Farmacia Virtual Heel</h3>
                            <p className='description-platform'>Healthcare eCommerce platform</p>
                            <p className='tag-line'>
                                <span className='technology'>Symfony</span>
                                <span className='technology'>JavaScript</span>
                                <span className='technology'>HTML</span>
                                <span className='technology'>CSS</span>
                                <span className='technology'>Sass</span>
                                <span className='technology'>Bootstrap</span>
                                <span className='technology'>UI/UX Redesign</span>
                            </p>
                            <div className='content-btn'>
                                <a href="https://redisenofarmacia.iridian.co/" target='_blank' className='btn btn-outline-terteary'>Visit Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='singular-project'>
                            <img src="https://bramdonsantiago.github.io/portfolio/img/rifu-mockup-min.png" alt="" loading='lazy' />
                            <h3>Rifu / Rifeo</h3>
                            <p className='description-platform'>High-traffic multi-tenant raffle and sweepstakes platform</p>
                            <p className='tag-line'>
                                <span className='technology'>Symfony</span>
                                <span className='technology'>JavaScript</span>
                                <span className='technology'>HTML</span>
                                <span className='technology'>CSS</span>
                                <span className='technology'>Sass</span>
                                <span className='technology'>UI/UX Redesign</span>
                                <span className='technology'>Multi-Tenant</span>
                            </p>
                            <div className='content-btn'>
                                <a href="https://rifeo.co/" target='_blank' className='btn btn-outline-terteary'>Visit Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='singular-project'>
                            <img src="https://bramdonsantiago.github.io/portfolio/img/cervalle-mockup-min.png" alt="" loading='lazy' />
                            <h3>Rifu / Rifeo</h3>
                            <p className='description-platform'>
                                Modern eCommerce platform focused on performance and user experience (UX), incorporating advanced animations, fluid transitions, and dynamic content loading.
                            </p>
                            <p className='tag-line'>
                                <span className='technology'>React/Next.js</span>
                                <span className='technology'>React Query + Axios</span>
                                <span className='technology'>React Hook Form</span>
                                <span className='technology'>CSS modules</span>
                                <span className='technology'>Consuming a RESTful API</span>
                                <span className='technology'>Headless Architecture</span>
                            </p>
                            <div className='content-btn'>
                                <a href="https://cervalle.com/" target='_blank' className='btn btn-outline-terteary'>Visit Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Portfolio;
