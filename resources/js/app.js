require('./bootstrap'); 

import Vue from 'vue';
import { HasError, AlertError } from "vform/src/components/bootstrap4";

import Form from 'vform';
import { routes } from './routes';
import VueRouter from 'vue-router';
import moment from 'moment'; 
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})
  

Vue.use(VueRouter);
window.Form = Form;   
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

