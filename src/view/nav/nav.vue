<template>
  <div class="nav">
    <div class="container">
      <h2>开发</h2>
      <el-row class="category">
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="JQuery插件库" href="http://www.jq22.com/">收集最全最新最好的JQuery插件</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="Swiper" href="http://www.swiper.com.cn/">Swiper滑动插件</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="Animate.css" href="https://daneden.github.io/animate.css/">Animate.css集成css3的动画，下载和演示。</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="字蛛" href="http://font-spider.org/">字体压缩</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="有字库" href="https://www.youziku.com/">web font在线加载字体</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="iconfont" href="http://www.iconfont.cn/">阿里巴巴矢量图标库</nav-card></el-col>
      </el-row>
      <h2>文档</h2>
      <el-row class="category">
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="Bootstrap" href="http://www.bootcss.com/">Bootstrap中文文档</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="JQuery" href="http://jquery.cuishifeng.cn/">JQuery中文文档</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="Vue" href="https://cn.vuejs.org/">Vue.js中文官方文档</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="NodeJs" href="https://nodejs.org/en/">Node.js官方文档</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="Express" href="http://expressjs.com/">Express官方文档</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="Koa" href="https://koa.bootcss.com/">Koa官方文档</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="MDN" href="https://developer.mozilla.org/zh-CN/">标准文档</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="Threejs" href="https://threejs.org/">webGL的3d渲染</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="微信小程序" href="https://developers.weixin.qq.com/miniprogram/dev/index.html">微信小程序官方文档</nav-card></el-col>
      </el-row>
      <h2>论坛</h2>
      <el-row class="category">
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="CSDN" href="https://www.csdn.net/">专业IT技术社区</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="开源中国" href="https://www.oschina.net/">开源社区，项目分享和交流</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="stackoverflow" href="https://stackoverflow.com/">一个与程序相关的IT技术问答网站</nav-card></el-col>
        <el-col :xs="12" :sm="6" :lg="4"><nav-card class="nav-card" title="segmentfault" href="https://segmentfault.com/">开发者技术社区</nav-card></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import NavCard from '@/components/navCard/navCard'
export default {
  components: {
    NavCard
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
    h2 {
      margin: 0 0 8px 12px;
      padding: 5px 0;
      width: 150px;
      text-align: center;
      background: #1cdbee;
      color: #fff;
    }
    .category {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin-bottom: 30px;
      .nav-card {
        overflow: hidden;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        min-width: 150px;
        height: 100px;
      }
    }
  }
</style>
