import About from '../pages/About/About';
import Profile from '../pages/Profile/Profile';

const routes = [
    {
        path: '/',
        element: <About />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/portfolio',
        element: <Profile />,
    },
    {
        path: '/contact',
        element: <Profile />,
    },
];

export default routes;