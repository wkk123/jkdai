<template>
  <div class="resume">
    <div class="resume-box">
      <ul class="resume-list">
        <li class="resume-item">
          <mt-cell title="头像"  to="//github.com" is-link value="*">
            <span class="resume-pictrue right">
              <img slot="icon" src="/src/assets/images/icon/pictrue.jpg">
            </span>
          </mt-cell>
        </li>
        <li class="resume-item">
          <mt-cell title="昵称"  :to="{name:'nickname'}" is-link value="落雨寂寞"></mt-cell>
        </li>
        <li class="resume-item"><mt-cell title="手机号"  to="//github.com" is-link value="182****5840"></mt-cell></li>
        <li class="resume-item"><mt-cell title="姓名"  to="//github.com" is-link value="**寞"></mt-cell></li>
        <li class="resume-item"><mt-cell title="身份证"  to="//github.com" is-link value="3303***********124"></mt-cell></li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'resume',
  data(){
    return{
      resume:'',
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
