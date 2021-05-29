require('./bootstrap'); 

import Vue from 'vue';
import { HasError, AlertError } from "vform/src/components/bootstrap4";

import Form from 'vform';
import { routes } from './routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
window.Form = Form;
Vue.component('master-component', require('./components/Master.vue').default);

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.filter('capitalize', function (text) {
    if (!text) return ''
    text = text.toString()
    return text.charAt(0).toUpperCase() + text.slice(1)
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

