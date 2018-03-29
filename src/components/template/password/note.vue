<template>
  <div class="note">
    <div class="note-box">
      <div class="note-hint">
        <span>验证码已发送至:</span>
        <span>{{PhoneNum}}</span>
      </div>
      <div class="note-time"><span>{{DownTime}}s后重新获取</span></div>
      <ul class="note-list clearfix">
        <input class="note-pass" type="password" maxlength="4" name="" id="">
        <li class="note-item fl"></li>
        <li class="note-item fl"></li>
        <li class="note-item fl"></li>
        <li class="note-item fl"></li>
      </ul>
      <div class="note-hitbar"><span>验证码20秒内有效，请尽快输入</span></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'note',
  data(){
    return{
      PhoneNum:'18258175840',
      DownTime:'29',
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
