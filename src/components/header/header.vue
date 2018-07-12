<template>
  <div class="header">
    <div class="container">
      <router-link to="/" tag="h1" class="logo"><img :src="require('./logo.png')" alt="logo"></router-link>
      <!-- <div class="logo"></div> -->
      <div class="nav-category" @click="toggleNav"><i class="iconfont icon-category"></i></div>
      <!-- PC端导航 -->
      <ul class="nav">
        <router-link to="/" tag="li" style="cursor: pointer">主页</router-link>
        <router-link to="/hotArticle" tag="li" style="cursor: pointer">热门博文</router-link>
      </ul>
      <!-- 移动端导航 -->
      <transition name="fade">
        <ul class="nav-mobile" v-show="showNav" @click="toggleNav">
          <router-link to="/" tag="li">主页</router-link>
          <router-link to="/hotArticle" tag="li">热门博文</router-link>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style lang="scss" scoped>
  $headerHeight: 50px;
  $headerBackground: rgba(255, 255, 255, 0.9);
  .header {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    border-top:1px solid #59bfff;
    background: $headerBackground;
    box-shadow: 0 0 10px #ccc;
    .container {
      height: $headerHeight;
      img {
        width: 100%;
      }
      .logo {
        position: absolute;
        left: 15px;
        padding: 5px 0;
        width: 150px;
        height: $headerHeight;
        cursor: pointer;
        img {
          height: $headerHeight - 10;
          width: auto;
        }
      }
      .nav-category {
        display: none;
        position: absolute;
        right: 20px;
        padding: 0 10px;
        height: $headerHeight;
        line-height: $headerHeight;
        i {
          font-size: 20px;
        }
      }
      .nav {
        display: block;
        position: absolute;
        right: 20px;
        height: $headerHeight;
        line-height: $headerHeight;
        font-size: 0;
        li {
          display: inline-block;
          padding: 0 20px;
          font-size: 16px;
          cursor: pointer;
          transition: all .3s;
          &:hover {
            background: #8be4e0;
            color: #fff;
          }
        }
      }
      .nav-mobile {
        position: absolute;
        top: $headerHeight;
        z-index: 100;
        padding: 8px 0;
        width: 100%;
        background: $headerBackground;
          li {
          padding: 8px 15px;
          a {
            display: block;
          }
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @media (max-width: 992px) {
    .nav {
      display: none !important;
    }
    .nav-category {
      display: block !important;
    }
  }
</style>
