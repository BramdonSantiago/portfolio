import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className='img-profile'>
                <img src="https://bramdonsantiago.github.io/portfolio/img/profile.jpg" alt="" />
            </div>
            <div className='navigation'>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <div className='icon-navigation'>
                        <i className='fa-solid fa-house'></i>
                    </div>
                    <p className='navigation-text'>About</p>
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <div className='icon-navigation'>
                        <i className='fa-solid fa-user'></i>
                    </div>
                    <p className='navigation-text'>Profile</p>
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <div className='icon-navigation'>
                        <i className='fa-solid fa-briefcase'></i>
                    </div>
                    <p className='navigation-text'>Portfolio</p>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <div className='icon-navigation'>
                        <i className="fa-regular fa-handshake"></i>
                    </div>
                    <p className='navigation-text'>Contact</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;


