import About from '../pages/About/About';
import Profile from '../pages/Profile/Profile';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';

const routes = [
    {
        path: '/',
        element: <About />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/projects',
        element: <Portfolio />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
];

export default routes;