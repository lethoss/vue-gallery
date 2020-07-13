<template>
  <div id="app">
    <hr>
    <div>Test Vue Gallery with searching photos</div>
    <hr>
    <router-link to="/" exact>Home </router-link>
    <router-link to="/gallery" exact>Gallery </router-link>
    <router-link to="/about" exact>About </router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
      </div>
    </template>


    <script>
    export default {
      name: 'App',
      components: {
      }
    }
    </script>


    <style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    .router-link-active {
      color: red;
    }
    </style>
