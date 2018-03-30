<template>
  <div class="identity">
    <div class="identity-box">
      <div class="identity-hint setPass">
        <span class="hint-item">为您账户提供安全保障</span>
        <span class="hint-item">{{HintHext}}</span>
      </div>
      <ul class="identity-list clearfix">
        <input class="identity-pass" type="password" v-model="Password" maxlength="6" name="" id="">
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
  name:'setPass',
  data(){
    return{
      HintHext:'请设置交易密码(6位数字)',//请再次新的交易密码(6位数字)
      isNext:false,//下一步，提交
      BtnText:'下一步',
      Password:'',
    }
  },
  methods: {
    NextBtn:function(){
      this.HintHext = '请再次新的交易密码(6位数字)';
      this.BtnText = '提交';
      console.log(this.Password);
      this.Password= '';
    },
  }
}
</script>

<style scoped>

</style>
