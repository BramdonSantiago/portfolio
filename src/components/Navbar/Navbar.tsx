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
                    <i className='fa-solid fa-house'></i>
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <i className='fa-solid fa-user'></i>
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <i className='fa-solid fa-briefcase'></i>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <i className="fa-regular fa-handshake"></i>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;


