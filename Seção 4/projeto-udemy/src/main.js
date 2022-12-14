// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.min.css'
import Vue from 'vue';
import App from './App';
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
