require('./bootstrap'); 

import Vue from 'vue';
import { routes } from './routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);  

Vue.component('master-component', require('./components/Master.vue').default);


const router = new VueRouter({
    routes, 
    mode: 'history'
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});

