import './Contact.css';

function Contact() {
    return (
        <div className='page-content'>
            <div className="custom-container">
                <div className='content-title-main'>
                    <h1 className='title-main text-center'>Contact <span>me</span></h1>
                </div>
                <div className="contact-data">
                    <div className='lets-keep-touch'>
                        <h3>Let's keep in touch:</h3>
                        <p><span>Email:</span> bramdsantiago@gmail.com</p>
                        <p><span>Phone:</span> (+52) 4381338561</p>
                    </div>
                    <div className='social-media'>
                        <a href='https://www.linkedin.com/in/bramdonsantiago' target='_blank' className='singular-social-media'>
                            <i className='fa-brands fa-linkedin-in'></i>
                        </a>
                        <a href='https://github.com/BramdonSantiago' target='_blank' className='singular-social-media'>
                            <i className='fa-brands fa-github'></i>
                        </a>
                        <a href='https://wa.me/+524381338561?text=Hola, Bramdon. ¿Cómo estás?, podriamos tener una entrevista' target='_blank' className='singular-social-media'>
                            <i className='fa-brands fa-whatsapp'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
