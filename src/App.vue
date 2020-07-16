<template>
  <div id="app">
      <component :is="layout">
        <router-view />
      </component>
  </div>
</template>


<script>
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import firebase from 'firebase/app'
export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  },
  components: {
    MainLayout, AuthLayout
  },
  methods: {
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
  }
}
</script>


<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-link-active {
  color: red !important;
}
</style>
