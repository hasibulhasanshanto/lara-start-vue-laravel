import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Password from './components/Password';


export const routes = [
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
]