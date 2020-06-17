import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vuex from '@/plugins/vuex';
import { RootState } from "@/state/RootState";
import MenuModule, { IMenuModule } from "@/modules/Recipe.module";
import * as firebase from 'firebase'
import "firebase/analytics";
import "firebase/auth";
import * as firebaseJson from "./firebase.json";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: firebaseJson.apiKey,
  authDomain: firebaseJson.authDomain,
  databaseURL: firebaseJson.databaseURL,
  projectId: firebaseJson.projectId,
  storageBucket: firebaseJson.storageBucket,
  messagingSenderId: firebaseJson.messagingSenderId,
  appId: firebaseJson.appId,
  measurementId:firebaseJson.measurementId 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const menuModule: IMenuModule = new MenuModule();

const store = new Vuex.Store<RootState>({
  modules: {
    menu: menuModule
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
