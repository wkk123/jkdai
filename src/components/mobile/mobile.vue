<template>
  <div class="jkdai">
    <Headerbox :title="$route.meta.cname"
    :fontColor="$route.meta.font"
    :backColor="$route.meta.bgcolor"
    :leftBtnTyple="$route.meta.left"
    :rightBtnTyple="$route.meta.right"
    :barText="$route.meta.Text"></Headerbox>
    <div class="main">
      <router-view></router-view>
    </div>
    <navbar v-show="$route.meta.navShow"></navbar>
  </div>
</template>
<script>
import Headerbox from './../element/title';
import navbar from './../element/navbar'
export default {
  name:'mobile',
  components: {
    Headerbox,navbar
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.jkdai{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width:100%;
  height:100%;
  background:#eeeeee;
}
.main{
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width:100%;
  height: 100%;
  padding-top: 1.0rem;
  background:#eeeeee;
}
</style>


