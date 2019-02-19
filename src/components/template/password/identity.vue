<template>
  <div class="identity">
    <div class="identity-box">
      <div class="identity-hint"><span>请输入您的身份证后6位进行验证</span></div>
      <ul class="identity-list clearfix">
        <input class="identity-pass" type="password" maxlength="6" name="" id="">
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
        <li class="identity-item fl"></li>
      </ul>
      <div class="identity-hitbar"><span>输错5次后将禁用找回密码功能</span></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'identity',
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
