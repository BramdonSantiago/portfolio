import './Profile.css';

function Profile() {
    return (
        <div className='page-content'>
            <div className="custom-container">
                <div className='section'>
                    <div className='content-title-main'>
                        <h1 className='title-main text-center'>About <span>me</span></h1>
                    </div>
                    <div className="personal-info">
                        <div className="info-data">
                            <h3>Personal info</h3>
                            <p><span>Name:</span> Bramdon Santiago</p>
                            <p><span>Professional:</span> Frontend developer</p>
                            <p><span>Nationality:</span> Mexican</p>
                            <p><span>Email:</span> bramdsantiago@gmail.com</p>
                            <p><span>Phone:</span> (+52) 4381338561</p>
                        </div>
                        <div className="info-tags">
                            <div className="singular-info-tag">
                                <span className='quantity'>5</span>
                                <h3 className='description'>Years of experience</h3>
                            </div>
                            <div className="singular-info-tag">
                                <span className='quantity'>+ 40</span>
                                <h3 className='description'>Professional Projects</h3>
                            </div>
                            <div className="singular-info-tag">
                                <span className='quantity'>+ 1500</span>
                                <h3 className='description'>Cups of coffee drunk</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='section'>
                    <div className='content-title-main'>
                        <h2 className='title-main text-center'><span>My</span> skills</h2>
                    </div>
                    <div className='skills'>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>HTML</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>CSS</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>Javascript</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>Angular</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>TypeScript</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>Ionic (Cordova/Capacitor)</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>React</label>
                                <span className='experience'>Advanced experience</span>
                            </div>
                            <progress max="100" value="75"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>CSS Frameworks (Bootstrap, Tailwind, Bulma)</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>Git</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                        <div className='singular-skill'>
                            <div className='technology-experience'>
                                <label className='technology'>Symfony</label>
                                <span className='experience'>High experience</span>
                            </div>
                            <progress max="100" value="100"></progress>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='content-title-main'>
                        <h2 className='title-main text-center'><span>Cover</span> letter</h2>
                    </div>
                    <p>I'm a front-end developer with 5 years of experience creating modern, accessible, and user-experience-focused interfaces. I work primarily with Angular and Ionic, specializing in developing web and mobile apps that not only work well, but also feel good.</p>
                    <p>I'm passionate about building functional and clean solutions, collaborating with multidisciplinary teams, and staying on top of best practices and new tools. Although I'm not a designer, I have a keen eye for visual details and enjoy turning ideas into powerful and engaging digital experiences.</p>
                    <p>
                        I've worked with API integration and a variety of modern tools from the front-end ecosystem. I'm interested in participating in projects that represent a technical challenge and provide real positive value to people.</p>
                </section>
                <section className='section'>
                    <div className='content-title-main'>
                        <h2 className='title-main text-center'><span>My</span> experience</h2>
                    </div>
                    <div className="timeline">
                        <div className="outer">
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">2020 - 2021</h3>
                                    <p className='company-name'>Designer and developer at <a href='https://taxisdonvasco.com/' target='_blanck'>Taxis Don Vasco</a></p>
                                    <p>
                                        Design the company's website in Adobe XD. <br />
                                        I carried out the implementation, development and web deployment. <br />
                                        It is currently still a project in production. <br />
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">2021 - Currently</h3>
                                    <p className='company-name'>Frontend developer at <a href='https://iridian.co/' target='_blanck'>Iridian</a></p>
                                    <p>
                                        *Frontend Project Developer <br />
                                        -Project development in Symfony environment. <br />
                                        -Project development in Angular. <br />
                                        -Project development in React. <br />
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
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;


