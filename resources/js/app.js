require('./bootstrap'); 

import Vue from 'vue';
import { HasError, AlertError } from "vform/src/components/bootstrap4";

import Form from 'vform';
import { routes } from './routes';
import VueRouter from 'vue-router';
import moment from 'moment'; 
import VueProgressBar from 'vue-progressbar';

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
}
  

Vue.use(VueRouter);
window.Form = Form;  
Vue.use(VueProgressBar, options)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


Vue.component('master-component', require('./components/Master.vue').default);


Vue.filter('capitalize', function (text) {
    if (!text) return ''
    text = text.toString()
    return text.charAt(0).toUpperCase() + text.slice(1)
});
  
Vue.filter('formatDate', (value) => {
    if (!value) return ''
    return moment(value).format('MMM Do YY')
})

const router = new VueRouter({
    routes, 
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

/**
 * Mounted with id app
 */
const app = new Vue({
    el: '#app',
    router
});

