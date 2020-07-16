<template>
  <div class="text-center">

    <Toast :errorMessage="this.errorMessage"/>

    <router-view v-on:error="error"/>
  </div>
</template>

<script>
import Toast from '@/components/Toast'
export default {
  name: "auth-layout",
  data: () => ({
    errorMessage: ''
  }),
  components: {
     Toast
  },
  methods: {
    error: function (e) {
      this.errorMessage = e.message
      setTimeout (() => this.errorMessage = '', 10000)
    }
  }
}
</script>

<style>

html, body, #app {
  height: 100%;
}

.text-center {
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
