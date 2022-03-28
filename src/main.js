import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'ant-design-vue/dist/antd.css';

import SWFormDesign from './components/k-form-design/packages';
import './components/k-form-design/styles/form-design.less';

Vue.use(SWFormDesign);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
