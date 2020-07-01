<template>
  <div>
    <h2>Gallery page</h2>
    <router-link to="/">Home </router-link>
    <router-link to="/About">About </router-link>
    <div class="galleryContent">
      <div class="photoBox" v-for="(photo, index) in photos" v-bind:key="index">
        <div class="photoItem"> <img v-bind:src="photo.urls.small"></div>
        <div class="photoLabel">{{photo.alt_description}}</div>
      </div>
    </div>
    <input type="text" placeholder="Enter the name of images" v-model="forSearch">
    <button type="button" @click="getNewImages">Find the images!</button>
  </div>
</template>

<script>

export default {
  http: {
    headers: {
      Authorization: 'Client-ID 6L6Oame1JTB4nz96pA4O7lHQjzyT4uadHQ1LMzbR1ZM'
    }
  },
  name: 'Gallery',
  data: function () {
    return {
      photos: [],
      forSearch: '',
      searchHistory: [],
      count: 0
    }
  },
  methods: {
    getNewImages: function() {
      this.searchHistory.push(this.forSearch)
      for (let i in this.searchHistory) {
        if (this.forSearch === this.searchHistory[i]) {
          this.count++
        }
      }
      let newImages = this.$resource('https://api.unsplash.com/search/photos?query={/query}&page={page}')
      newImages.get({ query: encodeURIComponent(this.forSearch), page: this.count }).then(function(response) {
        this.count = 0
        this.photos = this.photos.concat(response.body.results)
        this.forSearch = ''
      }, function(error){
        throw error
      })
    }
  },
}
</script>

<style scoped>
.galleryContent {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.photoBox {
  margin: 10px 0 10px 0;
  border: 2px solid black;
  width: 300px;
  height: 300px;
}
.photoItem {
  max-height: 257px;
}
img {
  width: 300px;
  max-height: 257px;
}
.photoLabel {
  max-height: 36px;
  border-top: 1px solid black;
  text-align: center;
  padding: 3px 0 3px 0;
}
button {
  box-sizing: content-box;
  width: 100px;
  height: 40px;
  margin: 20px 10px 20px 10px;
}
input {
  box-sizing: content-box;
  width: 300px;
  height: 40px;
  margin: 20px 10px 20px 10px;
}
</style>
