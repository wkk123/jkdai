<template>
  <div class="seting">
    <div class="seting-box">
      <mt-cell class="left" title="服务与隐私协议">
        <mt-switch v-model="value"></mt-switch>
      </mt-cell>
      <div class="seting-hint"><span>如果您要关闭或开启新消息通知，请在手机的设置>通知>即可贷中设置</span></div>
      <ul class="seting-list">
        <li class="seting-item">
          <mt-cell title="重置登录密码" :to="{name:'ResetLogin'}" is-link value=""></mt-cell>
        </li>
        <li class="seting-item">
          <mt-cell title="重置交易密码" :to="{name:'ResetPass'}" is-link value=""></mt-cell>
        </li>
      </ul>
      <input class="seting-btn" type="button" value="退出登录">
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
// import Sign from './../../element/sign/sign';
import './../../../assets/css/main/index.css';
export default {
  name:'seting',
  data(){
    return{
      value : true,
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
