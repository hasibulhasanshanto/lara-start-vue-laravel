import HomePage from './components/front/HomePage';
import Products from './components/front/Products';
import About from './components/front/About';
import ContactUs from './components/front/ContactUs';
import PageNotFound from './components/front/PageNotFound.vue';

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
        path: '/profile',
        component: Profile
    }, 
    {
        path: '/password',
        component: Password
    },

    //404 Error
    {
        path: '*',
        component: PageNotFound
    }, 
]