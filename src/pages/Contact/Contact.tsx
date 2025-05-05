import './Contact.css';

function Contact() {
    return (
        <div className='page-content'>
            <div className="custom-container">
                <div className='content-title-main'>
                    <h1 className='title-main text-center'>CONTACT <span>ME</span></h1>
                </div>
                <div className="contact-data">
                    <div className='lets-keep-touch'>
                        <h3>Let's keep in touch:</h3>
                        <p><span>Email:</span> bramdsantiago@gmail.com</p>
                        <p><span>Phone:</span> (+52) 4381338561</p>
                        <div className='gap-example'>
                            <audio controls>
                                <source src="https://bramdonsantiago.github.io/portfolio/audio/audio-4.mp3" type="audio/mp3" />
                            </audio>
                        </div>
                    </div>
                    <div className='social-media'>
                        <a href='https://www.linkedin.com/in/bramdonsantiago' target='_blank' className='singular-social-media'>
                            <i className='fa-brands fa-linkedin-in'></i>
                        </a>
                        <a href='https://wa.me/+524381338561?text=Hola, Bramdon. ¿Cómo estás?, podriamos tener una entrevista' target='_blank' className='singular-social-media'>
                            <i className='fa-brands fa-whatsapp'></i>
                        </a>
                        <a href='https://github.com/BramdonSantiago' target='_blank' className='singular-social-media'>
                            <i className='fa-brands fa-github'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
