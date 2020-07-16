<template>
  <span class="form-signin">
    <form @submit.prevent="register">
      <h1 class="h3 mb-3 font-weight-normal">Register form</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
      <label for="inputName" class="sr-only">Name</label>
      <input type="text" id="inputName" class="form-control" placeholder="Name" required="" v-model="name">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
    <br>
    <router-link tag="button" to="/login" class="btn btn-sm btn-secondary btn-block" type="submit">Already register? Sign in!</router-link>
    <p class="mt-5 mb-3 text-muted">2020</p>
  </span>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data: () => ({
    email: '',
    password: '',
    name: ''
  }),
  methods: {
    async register() {
      try {
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        const uid = await this.$parent.$parent.getUid()
        await firebase.database().ref(`/users/${uid}/info`).set({
          name: this.name
        })
        this.$router.push('/')
      } catch (e) {
        this.$emit('error', e)
      }
    }
  }
}
</script>
