require('./bootstrap'); 

import Vue from 'vue';
import { routes } from './routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);  

Vue.component('master-component', require('./components/Master.vue').default);


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

