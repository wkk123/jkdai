<template>
  <div class="identity">
    <div class="identity-box">
      <div class="identity-hint"><span>{{HintHext}}</span></div>
      <ul class="identity-list clearfix">
        <input class="identity-pass login" type="password" v-model="Password" maxlength="16" name="" id="">
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
      HintHext:'请设置新的登录密码(6-16位)',//请再次输入新的登录密码(6-16位)
      isNext:false,//下一步，提交
      BtnText:'下一步',
      Password:'',
    }
  },
  methods: {
    NextBtn:function(){
      this.HintHext = '请再次输入新的登录密码(6-16位)';
      this.BtnText = '提交';
      console.log(this.Password);
      this.Password= '';
    },
  }
}
</script>

<style scoped>

</style>
