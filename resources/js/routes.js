import HomePage from './components/front/HomePage';
import Products from './components/front/Products';
import About from './components/front/About';
import ContactUs from './components/front/ContactUs';

import Dashboard from './components/backend/Dashboard';
import Profile from './components/backend/Profile';
import Password from './components/backend/Password';


export const routes = [
    //Frontend Routes
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact-us',
        component: ContactUs
    },
    
    //Backend Routes
    {
        path: '/home',
        component: Dashboard
    }, 
    {
        path: '/home/profile',
        component: Profile
    }, 
    {
        path: '/home/password',
        component: Password
    }, 
]