<template>
  <div class="bindCard">
    <div class="bindCard-box">
      <ul class="bindCard-list">
        <li class="bindCard-item clearfix">
          <span class="fl bindCard-label tl">身份信息</span>
          <span class="fl bindCard-inner tr"></span>
        </li>
        <li class="bindCard-item clearfix">
          <span class="fl bindCard-label tl">持卡人姓名</span>
          <span class="fl bindCard-inner tr">***</span>
        </li>
        <li class="bindCard-item clearfix">
          <span class="fl bindCard-label tl">证件类型</span>
          <span class="fl bindCard-inner tr">****</span>
        </li>
        <li class="bindCard-item clearfix">
          <span class="fl bindCard-label tl">证件号码</span>
          <span class="fl bindCard-inner tr">*******************</span>
        </li>
      </ul>
      <ul class="bindCard-list">
        <li class="bindCard-item clearfix">
          <span class="fl bindCard-label tl">银行卡信息</span>
          <span class="fl bindCard-inner tr"></span>
        </li>
        <li class="bindCard-item clearfix">
          <span class="fl bindCard-label tl">卡信息</span>
          <span class="fl bindCard-inner tr">12345678912</span>
          <span class="fr bindCard-inner tr">工商银行借记卡</span>
        </li>
      </ul>
      <ul class="bindCard-list">
        <li class="bindCard-item clearfix">
          <span class="fl tl bindCard-label">手机号</span>
          <input class="fl bindCard-text" placeholder="请输入银行预留手机号" type="text">
        </li>
        <li class="bindCard-item clearfix">
          <span class="fl tl bindCard-label">验证码</span>
          <input class="fl bindCard-text"  placeholder="请输入短信验证码" type="number">
        </li>
      </ul>
      <div class="bindCard-hint tl">
        <span>同意</span><span class="more">《支付服务协议》</span>
      </div>
      <input class="next-btn" @click="NextBtn" type="button" :value="BtnText">
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'bindCard',
  data(){
    return{
      BtnText:'确认绑定',
    }
  },
  methods: {
    NextBtn:function(){
    },
  }
}
</script>

<style scoped>

</style>
