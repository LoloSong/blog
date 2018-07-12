<template>
  <div id="app">
    <v-header></v-header>
    <keep-alive><router-view class="main"></router-view></keep-alive>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  name: 'App',
  components: {
    vHeader: Header
  }
}
</script>

<style lang="scss" scoped>
$headerHeight: 60px;
.main {
  padding-top: $headerHeight;
}
@media (min-width: 1200px) {
  .main {
    padding-top: $headerHeight + 10;
    padding-bottom: $headerHeight / 2;
  }
}
</style>
