<template>
  <div class="bindCard">
    <div class="bindCard-box">
      <div class="bindCard-limit">
        <div class="limit-hint"><span>最低借款额度<em>{{Limit}}</em>元</span></div>
        <div class="limit-title">借款额度(元)</div>
        <div class="limit-number relative">
          <img class="relative" src="./../../../assets/images/icon/rmb1.png" alt="">
          <span>{{Limit}}</span>
        </div>
        <div class="limit-bar clearfix">
          <div class="fl limit-icon"><img src="./../../../assets/images/icon/delete.png" alt=""></div>
          <div class="fl  limit-barBox relative">
            <div class="limit-barBac"></div>
            <div class="limit-barBtn absolute"></div>
          </div>
          <div class="fl limit-icon"><img src="./../../../assets/images/icon/add.png" alt=""></div>
        </div>
      </div>
      <ul class="bindCard-list">
        <li class="bindCard-item clearfix">
          <span class="fl bindCard-label tl">借款金额</span>
          <span class="fl bindCard-inner tr">{{MoneyNum}}</span>
        </li>
        <li class="bindCard-item clearfix relative">
          <span class="fl tl bindCard-label">借款期限</span>
          <span class="fl bindCard-inner tr pr40">{{MoneyTime}}天</span>
          <div class="bindCard-icon absolute">
            <img src="./../../../assets/images/icon/right.png" alt="">
          </div>
        </li>
        <li class="bindCard-item clearfix relative">
          <span class="fl tl bindCard-label">到账银行卡</span>
          <span class="fl bindCard-inner tr pr40">{{backCard}}</span>
          <div class="bindCard-icon absolute">
            <img src="./../../../assets/images/icon/right.png" alt="">
          </div>
        </li>
        <li class="bindCard-item clearfix relative">
          <span class="fl tl bindCard-label">技术服务费</span>
          <span class="fl bindCard-inner tr pr60">{{MoneySkill}}元</span>
          <div class="bindCard-icon Skill absolute">
            <img src="./../../../assets/images/icon/js.png" alt="">
          </div>
        </li>
        <li class="bindCard-item clearfix relative">
          <span class="fl tl bindCard-label">优惠抵扣</span>
          <span class="fl bindCard-inner tr pr40">{{deduction}}</span>
          <div class="bindCard-icon absolute">
            <img src="./../../../assets/images/icon/right.png" alt="">
          </div>
        </li>
        <li class="bindCard-item clearfix relative">
          <span class="fl tl bindCard-label">到期应还</span>
          <span class="fl bindCard-inner tr pr60">{{Refund}}元</span>
          <div class="bindCard-icon Skill absolute">
            <img src="./../../../assets/images/icon/js.png" alt="">
          </div>
        </li>
      </ul>
      <div class="bindCard-hint clearfix tl">
        <div class="fl hint-select">
          <img src="./../../../assets/images/icon/select1.png" alt="">
          <img src="./../../../assets/images/icon/select2.png" v-if="false" alt="">
        </div>
        <div class="fl hint-text">
          <span>我已同意</span>
          <span class="more">《借款协议》</span>
          <span class="more">《委托融资协议》</span>
          <span class="more">《银行卡贷扣协议》</span>
        </div>
      </div>
      <input class="next-btn" @click="NextBtn" type="button" :value="BtnText">
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'LendMoney',
  data(){
    return{
      BtnText:'立即申请',
      MoneyNum:'4800',
      MoneyTime:'20',
      backCard:'立即添加',
      MoneySkill:'893.72',
      deduction:'暂无优惠券',
      Refund:'4866.28',
      Limit:'5000',//额度
      IMgSrc:'select1.png',//方框
    }
  },
  methods: {
    NextBtn:function(){
    },
  }
}
</script>

<style scoped>
.pr40 {
    padding-right: 0.4rem;
}
.pr60 {
    padding-right: 0.6rem;
}
.bindCard-icon.Skill{
  width: 0.4rem!important;
}
</style>
