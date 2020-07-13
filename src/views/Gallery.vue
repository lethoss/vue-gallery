<template>
  <div>
    <div>
      <h2>Gallery page</h2>
      <div class="galleryContent">
        <div v-for="(photo, index) in photos" :key="index">
        <div class="photoBox">
          <div class="photoItem">
             <img class="imageInPhotoItem" :src="photo.urls.small" @click="zoomImage(index)">
           </div>
          <div class="photoLabel">{{photo.alt_description}}</div>
        </div>
        <div v-if="photo.zoom" class="background" @click="closeZoomImage(index)"></div>
        <div v-if="photo.zoom" class="containerForZoomedImage">
        <img  class="zoomedImage" :src="photo.urls.regular">
      </div>
        <button v-if="photo.zoom" class="closeImageButton" @click="closeZoomImage(index)">Close</button>
      </div>
    </div>
      <input type="text" :placeholder="placeholder" v-model="forSearch">
      <button class="findTextButton" type="button" @click="getNewImages">Find the images!</button>
    </div>
    <Loader v-if="loading" />
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
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
      count: 0,
      loading: false,
      placeholder: 'Enter the name of images'
    }
  },
  components: {
    Loader
  },
  methods: {
    zoomImage: function (index) {
      this.$set(this.photos[index], 'zoom', true)
    },
    closeZoomImage: function (index) {
      this.$set(this.photos[index], 'zoom', false)
    },
    getNewImages: function() {
      if (this.forSearch) {
        this.loading  = true
        this.searchHistory.push(this.forSearch)
        for (let i in this.searchHistory) {
          if (this.forSearch === this.searchHistory[i]) {
            this.count++
          }
        }
        let newImages = this.$resource('https://api.unsplash.com/search/photos?query={/query}&page={page}')
        newImages.get({ query: encodeURIComponent(this.forSearch), page: this.count }).then(function(response) {
          this.count = 0
          if (response.body.results[0]) {
          this.photos = this.photos.concat(response.body.results)
          this.$set(this.photos, 'zoom', false)
          this.loading = false
          this.forSearch = ''
          this.placeholder = 'Try more!'
        } else {
          this.loading = false
          this.forSearch = ''
          this.placeholder = 'Cant find images with this name, try again'
        }
        }, function(error){
          throw error
        })
      } else {
        this.placeholder = 'You enteder nothing! Enter the name of image'
      }
    }
  },
}
</script>

<style scoped>
.galleryContent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.photoBox {
  margin: 15px;
  border: 2px solid black;
  width: 300px;
  height: 343px;
}
.photoItem {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center
}
.imageInPhotoItem {
  max-width: 300px;
  max-height: 300px;
}
.imageInPhotoItem:hover {
  cursor: pointer;
}
.containerForZoomedImage {
  position: fixed;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50vh;
  left: 50vw;
  margin: -300px 0px 0 -309px;
  z-index: 2;
}
.zoomedImage {
  max-width: 600px;
  max-height: 600px;
  z-index: 2;
}
.closeImageButton {
  position: fixed;
  width: 100px;
  height: 50px;
  top: 50vh;
  left: 50vw;
  margin: 310px 0px 0 -59px;
  z-index: 2;
}
.photoLabel {
  max-height: 36px;
  border-top: 1px solid black;
  text-align: center;
  padding: 3px 0 3px 0;
  overflow-y: auto;
}
.findTextButton {
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
.background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  opacity: 0.9;
  z-index: 1;
  top: 0;
  left: 0;
}
</style>
