import './About.css';

import { useEffect, useState } from "react";

import ScatteringText from '../../components/ScatteringText/ScatteringText';


function About() {
    const [text, setText] = useState("");
    const fullText = "Frontend Developer";
    const speed = 100;

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;

            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='page-content text-center'>
            <div className="custom-container">
                <div className='content-title-main'>
                    <div style={{ marginBottom: '1rem' }}>
                        <ScatteringText
                            Tag="h1"
                            className="title-main text-center"
                            textParts={[
                                { text: "I am" },
                                { text: " Bramdon Santiago", scatter: true},
                            ]}
                        />
                    </div>
                    {/* <h1 className='title-main' style={{ marginBottom: '1rem' }}>I am <span>Bramdon Santiago</span></h1> */}
                    <h2>{text}</h2>
                </div>
                <p>Hi, I am Bramdon, a technology enthusiast from Mexico. I am passionate about web design and development, especially everything related to visual aspects and interactivity. I love working on the frontend. Additionally, I enjoy designing my own sites, so I have experience with design tools such as Figma and Adobe XD. I have been involved from the beginning through to the launch of multiple projects. I'm seeking new challenges. I understand UI/UX, and as part of the challenges I have faced, I have successfully designed and developed my own interfaces and prototypes. I have experience with agile methodologies, such as Scrum.</p>
                <p>I am currently looking to stay in a job that involves 100% React or Angular projects, although I have a slight preference for Angular, I have no problems working within the ecosystem of other frontend technologies. I am looking to stay and continue working 100% remote.</p>
                <div className='social-media' style={{ justifyContent: 'center' }}>
                    <a href='https://www.linkedin.com/in/bramdonsantiago' target='_blank' className='singular-social-media'>
                        <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                    <a href='https://wa.me/+524381338561?text=Hola, Bramdon. ¿Cómo estás?, ¿Podríamos tener una entrevista?' target='_blank' className='singular-social-media'>
                        <i className='fa-brands fa-whatsapp'></i>
                    </a>
                    <a href='https://github.com/BramdonSantiago' target='_blank' className='singular-social-media'>
                        <i className='fa-brands fa-github'></i>
                    </a>
                </div>
                <div className='btn-cv-content'>
                    <a href='https://drive.google.com/file/d/13m2Iqgu-a62yb-jm0EhMW6uszFblTsHk/view?usp=drive_link' target='_blank' className='btn btn-outline-terteary'>Download CV</a>
                </div>
            </div>
        </div>
    );
}

export default About;


