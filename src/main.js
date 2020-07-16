import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(VueResource)

firebase.initializeApp({
  apiKey: "AIzaSyAde7CaePxxBCemvUZNoabbK1Iu7S7eD-o",
  authDomain: "lethos-vue-gallery.firebaseapp.com",
  databaseURL: "https://lethos-vue-gallery.firebaseio.com",
  projectId: "lethos-vue-gallery",
  storageBucket: "lethos-vue-gallery.appspot.com",
  messagingSenderId: "457907606851",
  appId: "1:457907606851:web:b80078e9c701e9e76ecbf6",
  measurementId: "G-1VCB5TDY7H"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})
