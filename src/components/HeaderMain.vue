<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" exact class="nav-link">Home<span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/gallery" exact class="nav-link">Gallery<span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/about" exact class="nav-link">About<span class="sr-only">(current)</span></router-link>
        </li>

      </ul>
    </div>
    <router-link to="/login" exact class="nav-link">Login<span class="sr-only">(current)</span></router-link>
    <router-link to="/register" exact class="nav-link">Register<span class="sr-only">(current)</span></router-link>
    <span class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{this.userName.name || 'User Without Name'}}
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#" >Clear saved images</a>
        <a @click="logout" class="dropdown-item">Logout</a>
      </div>
    </span>
  </nav>
</template>

<script>
import firebase from 'firebase/app'
export default {
  name: 'header-main',
  data: () => ({
    userName: {
      name: ''
    }
  }),
  methods: {
    async logout() {
      await firebase.auth().signOut()
      this.userName = {}
      this.$router.push('/login')
    },
  },
  async mounted () {
      try {
        const uid = await this.$parent.$parent.getUid()
        this.userName = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
      } catch (e) {
        console.log(e)
        this.$router.push('/login')
        throw e
      }
  },
}
</script>

<style lang="css" scoped>
.dropdown-menu {
  margin-left: -35px;
}
.dropdown-item {
  white-space: break-spaces;
}
</style>
