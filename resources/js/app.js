require('./bootstrap'); 

import Vue from 'vue';
import { HasError, AlertError } from "vform/src/components/bootstrap4";

import Form from 'vform';
import { routes } from './routes';
import VueRouter from 'vue-router';
import moment from 'moment'; 
import VueProgressBar from 'vue-progressbar';
import Swal from 'sweetalert2';

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})
  

Vue.use(VueRouter);
window.Form = Form;   
window.Swal = Swal;   
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

let Fire = new Vue;
window.Fire = Fire;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;   

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

