<template>
  <div>
    <div class="login" v-if="isLogin">
      <div class="popup-box">
        <ul class="clearfix header">
          <li class="fl login-name">
            <span>兑换优惠券</span>
          </li>
          <li class="fr">
            <div class="login-close">
              <img src="/src/assets/images/icon/X.png" alt="">
            </div>
          </li>
        </ul>
        <ul class="login-number">
          <li class="item-num"><input type="number" placeholder="请输入优惠券兑换码"></li>
        </ul>
        <div class="login-btn convert"><input class="btn active" type="button" value="登录"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'Convert',
  data () {
    return {
      isLogin:true,//登录
    }
  }
}
</script>
<style lang="stylus" scoped>
.login-btn.convert{
  padding-bottom:0.42rem;
}
.login-btn.convert .btn.active{
  background:#d9d9d9;
  color:#c8c8c8;
}
</style>

