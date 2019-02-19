<template>
  <div class="bankCard">
    <div class="bankCard-box">
      <div class="bankCard-nav clearfix">
        <ul class="bankCard-box fl" :class={active:isback} @click="nav">
          <li class="bankCard-title"><span>信用卡</span></li>
          <li class="bankCard-Str"></li>
        </ul>
        <ul class="bankCard-box fl" :class={active:!isback} @click="nav">
          <li class="bankCard-title">借记卡</li>
          <li class="bankCard-Str"></li>
        </ul>
      </div>
      <!-- 信用卡 -->
      <div class="bankCard-credit" v-if="isback">
        <ul class="bankCard-list">
          <li class="bankCard-item">
            <ul class="bankCard-itembox">
              <li class="backCard-top clearfix">
                <img class="back-flag fl" src="/src/assets/images/icon/ghflag.png" alt="">
                <span  class="back-name fl">中国工商银行</span>
                <img class="card-flag fr" src="/src/assets/images/icon/visa.png" alt="">
              </li>
              <li class="backCard-num">
                <span>Cord Number</span>
              </li>
              <li class="backCard-pass">
                <span class="flag">****</span>
                <span class="flag">****</span>
                <span class="flag">****</span>
                <span>8888</span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="bankCard-add" @click="addBank">
          <i>+</i><span>添加信用卡</span>
        </div>
      </div>
      <!-- 借记卡 -->
      <div class="bankCard-debit" v-if="!isback">
        <ul class="bankCard-list">
          <li class="bankCard-item">
            <ul class="bankCard-itembox">
              <li class="backCard-top clearfix">
                <img class="back-flag fl" src="/src/assets/images/icon/ghflag.png" alt="">
                <span  class="back-name fl">中国工商银行</span>
              </li>
              <li class="backCard-num">
                <span>Cord Number</span>
              </li>
              <li class="backCard-pass">
                <span class="flag">****</span>
                <span class="flag">****</span>
                <span class="flag">****</span>
                <span>8888</span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="bankCard-add" @click="addBank">
          <i>+</i><span>添加借记卡</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Sign from './../../element/sign/sign';
import './../../../assets/css/main/index.css';
export default {
  name:'bankCard',
  components: {

  },
  data(){
    return{
      isback:true,
    }
  },
  methods: {
    addBank:function(){
      this.$router.push({name: 'binding'})
    },
    nav:function(){
      this.isback = !this.isback;
    }
  }
}
</script>

<style scoped>

</style>
