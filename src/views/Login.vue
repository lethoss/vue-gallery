<template>
  <span class="form-signin">
    <form @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only" >Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    <br>
    <router-link
       tag="button"
       to="/register"
       class="btn btn-sm btn-secondary btn-block"
       type="submit"
     >
     Don't have account? Register!</router-link>
    <p class="mt-5 mb-3 text-muted">2020</p>
  </span>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async login() {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.push('/')
      } catch (e) {
        this.$emit('error', e)
      }
    }
  }
}
</script>
