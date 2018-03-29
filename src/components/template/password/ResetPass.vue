<template>
  <div class="identity">
    <div class="identity-box">
      <div class="identity-hint"><span>{{HintHext}}</span></div>
      <ul class="identity-list clearfix">
        <input class="identity-pass" type="password" maxlength="6" name="" id="">
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
      </ul>
      <input class="identity-btn" @click="NextBtn" type="button" :value="BtnText">
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'ResetPass',
  data(){
    return{
      HintHext:'请设置新的交易密码(6位数字)',//请再次输入新的交易密码(6位数字)
      isNext:false,//下一步，提交
      BtnText:'下一步',
    }
  },
  methods: {
    NextBtn:function(){
      this.HintHext = '请再次输入新的交易密码(6位数字)';
      this.BtnText = '提交';
    },
  }
}
</script>

<style scoped>

</style>
