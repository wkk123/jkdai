<template>
  <div class="NavBox">
    <div class="Navlist">
      <ul class="Navitem" @click="toNav1">
        <router-link :to="{name:'home'}">
          <li class="nav-img">
            <img class="nav-icon" :src="isNav1?'/src/assets/images/icon/nav1.png':'/src/assets/images/icon/nav01.png'" alt="">
          </li>
          <li class="nav-text" :class="{Navtext:isNav1}">借款</li>
        </router-link>
      </ul>
      <ul class="Navitem" @click="toNav2">
        <router-link :to="{name:'discover'}">
          <li class="nav-img">
            <img class="nav-icon" :src="isNav2?'/src/assets/images/icon/nav2.png':'/src/assets/images/icon/nav02.png'" alt="">
          </li>
          <li class="nav-text" :class="{Navtext:isNav2}">发现</li>
        </router-link>
      </ul>
      <ul class="Navitem" @click="toNav3">
        <router-link :to="{name:'myinfo'}">
          <li class="nav-img">
            <img class="nav-icon" :src="isNav3?'/src/assets/images/icon/nav3.png':'/src/assets/images/icon/nav03.png'" alt="">
          </li>
          <li class="nav-text" :class="{Navtext:isNav3}">我的</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'navbar',
  data () {
    return {
      isNav1:true,
      isNav2:false,
      isNav3:false,
    }
  },
  methods:{
    toNav1:function(){
      this.isNav1=true;
      this.isNav2=false;
      this.isNav3=false;
    },
    toNav2:function(){
      this.isNav1=false;
      this.isNav2=true;
      this.isNav3=false;
    },
    toNav3:function(){
      this.isNav1=false;
      this.isNav2=false;
      this.isNav3=true;
    }
  }
}
</script>
<style lang="stylus" scoped>
.NavBox
  width 100%
  height 1.0rem
  background #ffffff
  position  absolute
  bottom 0
  .Navlist
    height  100%
    width 100%
    display  flex
    .Navitem
      flex-grow  1
      height 100%
      display  flex
      flex-direction column
      .nav-img
        width 100%
        height 0.50rem
        display flex
        justify-content center
        align-items center
        .nav-icon
          width 0.44rem
          height 0.44rem
          display inline-block
      .nav-text
        width 100%
        height 0.5rem
        line-height 0.5rem
        font-size 0.24rem
        color #666666
        text-align center
        &.Navtext
          color #26b0ff
</style>

