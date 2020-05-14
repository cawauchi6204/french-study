import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyDGjIRySYrWq3xDQ1eGxMrLXDbtl6sEfX8",
  authDomain: "french-study-52b50.firebaseapp.com",
  databaseURL: "https://french-study-52b50.firebaseio.com",
  projectId: "french-study-52b50",
  storageBucket: "french-study-52b50.appspot.com",
  messagingSenderId: "952806426924",
  appId: "1:952806426924:web:9187cf1c8ad823ff46c489",
  measurementId: "G-T05CZTFNWX"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
