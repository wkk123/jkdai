<template>
  <div class="myinfo">
    <div class="myinfo-box">
      <div class="myinfo-info clearfix">
        <div class="fl myinfo-photo">
          <img :src="pictrue" alt="">
        </div>
        <ul class="fl myinfo-text">
          <li class="text-item tl">{{nickname}}</li>
          <li class="text-item tl">{{PhoneNum}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'wallet',
  data(){
    return{
      nickname:'昵称',
      PhoneNum:'12313456465',
      pictrue:require('./../../../assets/images/icon/pictrue.jpg'),
      iconLogo:require('./../../../assets/images/icon/jl.png'),
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.myinfo-link{
  display:block;
}
</style>
