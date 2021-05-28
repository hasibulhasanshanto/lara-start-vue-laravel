import Dashboard from './components/backend/Dashboard';
import Profile from './components/backend/Profile';
import Password from './components/backend/Password';


export const routes = [
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