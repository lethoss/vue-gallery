<template>
  <div>
    <HeaderMain />

    <router-view />
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain'
export default {
  name: 'main-layout',
  components: {
    HeaderMain
  }

}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
