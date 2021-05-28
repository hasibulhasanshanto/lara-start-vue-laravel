import HomePage from './components/front/HomePage';
import Products from './components/front/Products';

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