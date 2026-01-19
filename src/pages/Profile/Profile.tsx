import { useState, useEffect } from "react";

import './Profile.css';

function Profile() {
    const [experience, setExperience] = useState(0);
    const [coffeeCups, setCoffeeCups] = useState(0);

    useEffect(() => {
        const startYear = 2020;
        const startMonth = 2;
        const startDay = 20;

        const today = new Date();
        let years = today.getFullYear() - startYear;

        const anniversaryThisYear = new Date(today.getFullYear(), startMonth, startDay);
        if (today < anniversaryThisYear) {
            years -= 1;
        }
        setExperience(years);
    }, []);

    useEffect(() => {
        const startDate = new Date(2020, 2, 20);
        const today = new Date();

        let cups = 0;
        let currentDate = new Date(startDate);

        while (currentDate <= today) {
            const day = currentDate.getDay(); 
            if (day !== 0 && day !== 6) {
                cups++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        setCoffeeCups(cups);
    }, []);

    return (
        <div className='page-content'>
            <div className="custom-container">
                <div className='section'>
                    <div className='content-title-main'>
                        <h1 className='title-main text-center'>ABOUT <span>ME</span></h1>
                    </div>
                    <div className="personal-info">
                        <div className="info-data">
                            <h3>Personal info</h3>
                            <p><span>Name:</span> Bramdon Santiago</p>
                            <p><span>Professional:</span> Frontend developer</p>
                            <p><span>Location:</span> Mexico</p>
                            <p><span>Email:</span> bramdsantiago@gmail.com</p>
                            <p><span>Phone:</span> (+52) 4381338561</p>
                            <p><span>Languages:</span> Spanish - Native | English - B1</p>
                        </div>
                        <div className="info-tags">
                            <div className="singular-info-tag">
                                <span className='quantity'>{experience}</span>
                                <h3 className='description'>Years of experience</h3>
                            </div>
                            <div className="singular-info-tag">
                                <span className='quantity'><span className='plus-sign'>+</span> 40</span>
                                <h3 className='description'>Professional projects executed</h3>
                            </div>
                            <div className="singular-info-tag">
                                <span className='quantity'>{coffeeCups}</span>
                                <h3 className='description'>Cups of coffee drunk</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='section'>
                    <div className='content-title-main'>
                        <h2 className='title-main text-center'><span>MY</span> SKILLS</h2>
                    </div>
                    <div className='skills'>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>HTML</label>
                                    <p>5 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>CSS (Flexbox/Grid, responsive design and animations)</label>
                                    <p>5 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>CSS Frameworks (Bootstrap, Tailwind, Bulma)</label>
                                    <p>5 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Sass (SCSS Syntax/Indented Syntax)</label>
                                    <p>5 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>JavaScript</label>
                                    <p>5 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="90"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>TypeScript</label>
                                    <p>4 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="88"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Angular (Angular 12 - Angular 19)</label>
                                    <p>4 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="82"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>React (17, 18)</label>
                                    <p>3 years of experience</p>
                                </div>
                                <span className='experience'>Medium-Advanced experience</span>
                            </div>
                            <progress max="100" value="75"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Ionic (Ionic 5 - Ionic 8) [Cordova/Capacitor]</label>
                                    <p>4 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="95"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Symfony (Twig level)</label>
                                    <p>4 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Consumption of REST APIs</label>
                                    <p>4 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Unit test (Jasmine/Karma → Vitest)</label>
                                    <p>Learning</p>
                                </div>
                                <span className='experience'>Low experience</span>
                            </div>
                            <progress max="100" value="10"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Git (GitHub, Bitbucket) team-based workflows</label>
                                    <p>5 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <div className='technology'>
                                    <label>Agile methodologies (Scrum)</label>
                                    <p>5 years of experience</p>
                                </div>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='content-title-main'>
                        <h2 className='title-main text-center'><span>COVER</span> LETTER</h2>
                    </div>
                    <p>I'm a front-end developer with 5 years of experience creating modern, accessible, and user-experience-focused interfaces. I work primarily with Angular, specializing in developing web and hybrid mobile apps for Android/iOS that not only work well, but also feel good.</p>
                    <p>I'm passionate about building functional and clean solutions, collaborating with multidisciplinary teams, and staying on top of best practices and new tools. Although I'm not a designer, I have a keen eye for visual details and enjoy turning ideas into powerful and engaging digital experiences.</p>
                    <p>
                        I've worked with API integration and a variety of modern tools from the front-end ecosystem. I'm interested in participating in projects that represent a technical challenge and provide real positive value to people.</p>
                </section>
                <section className='section'>
                    <div className='content-title-main'>
                        <h2 className='title-main text-center'><span>MY</span> WORK EXPERIENCE</h2>
                    </div>
                    <div className="timeline">
                        <div className="outer">
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">2020 - 2021 (Remote)</h3>
                                    <p className='company-name'>Designer and developer at <a href='https://taxisdonvasco.com/' target='_blank'>Taxis Don Vasco</a></p>
                                    <p>
                                        Design the company's website in Adobe XD. <br />
                                        I carried out the implementation, development and web deployment. <br />
                                        It is currently still a project in production. <br />
                                    </p>
                                    <p>-Implementing on-page SEO, I managed to place it at number 1 for taxis in the region in Google search results.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">2021 - 2025 (Remote for Colombia)</h3>
                                    <p className='company-name'>Frontend developer at <a href='https://iridian.co/' target='_blank'>Iridian</a></p>
                                    <p>
                                        *Frontend Developer <br />
                                        -Projects development in Symfony environment. <br />
                                        -Projects development in Angular. <br />
                                        -Projects development in React. <br />
                                        -Development of hybrid applications for Android/iOS in Ionic (Cordova/Capacitor) & Angular. <br />
                                    </p>
                                    <p>
                                        • Lead multiple frontend projects, working with diverse features and technologies. <br />
                                        • Manage frontend projects from inception to completion, ensuring successful delivery. <br />
                                        • Oversee projects at various stages, implementing new features and improvements. <br />
                                        • Responsible for implementing new UI designs across multiple projects. <br />
                                        • Enhance UX and accessibility by proposing improvements in specific projects. <br />
                                    </p>
                                    <p>
                                        Throughout my career, I’ve had the opportunity to work on significant projects for well-known companies such as 𝗢𝗫𝗫𝗢, 𝐇𝐞𝐞𝐥, Enovate, Vumi, Romance Relax, Prodesa, PayOli, Cervalle, TDT, and more recently, a new project called Rifeo, which is in the process of establishing itself. These projects have not only been essential for my professional development, but have also been key to the growth and success of the company I currently collaborate with.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">2026 - Currently</h3>
                                    <p className='company-name'>I’m available for new opportunities as a Frontend Developer</p>
                                    <p>This is really exciting!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;


