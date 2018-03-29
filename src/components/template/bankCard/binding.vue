<template>
  <div class="binding">
    <div class="binding-box">
      <ul class="binding-list">
        <li class="binding-item clearfix">
          <span class="fl tl binding-label">持卡人</span>
          <input class="fl binding-text" placeholder="请输入持卡人姓名" type="text">
        </li>
        <li class="binding-item clearfix" v-if="false">
          <span class="fl tl binding-label">信用卡号</span>
          <input class="fl binding-text"  placeholder="请输入您的信用卡卡号" type="number">
        </li>
        <router-link style="display:block" :to="{name:'bindCard'}">
          <li class="binding-item clearfix relative">
            <span class="fl tl binding-label">信用卡号</span>
            <input class="fl binding-text" placeholder="请输入您的信用卡卡号" type="number">
            <div class="binding-icon absolute">
              <img src="./../../../assets/images/icon/right.png" alt="">
            </div>
          </li>
        </router-link>
      </ul>
      <div class="binding-hint">
        <span>绑卡后，该卡即用于您的借款与还款业务</span>
      </div>
      <input class="next-btn active" @click="NextBtn" type="button" :value="BtnText">
      <span class="binding-more">查看支持银行</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'binding',
  data(){
    return{
      isNext:false,//下一步，提交
      BtnText:'提交',
      Password:'',
    }
  },
  methods: {
    NextBtn:function(){
      this.BtnText = '提交';
      console.log(this.Password);
      this.Password= '';
    },
  }
}
</script>

<style scoped>

</style>
