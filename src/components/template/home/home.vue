<template>
  <div class="homebox">
    <div class="ShowNum">
      <!-- 可借额度 -->
      <!-- 1 未登录或者 未借款 -->
      <ul class="ShowHint" v-if="state ===('0'||'1')">
        <li class="Money-hitbar">
          <span class="Money-hitText" v-show="HText">{{hitText}}</span>
        </li>
        <li class="Money-height"><span>最高可借额度(元){{state}}</span></li>
        <li class="Money-num">
          <span class="rmbflag">
            <img src="/src/assets/images/icon/rmb1.png" alt="">
          </span>
          <span>{{MoneyNum}}</span>
        </li>
        <li class="Money-hit"><span>信用越好 / 额度越高</span></li>
        <li class="Money-btn">
          <button class="btn" @click="MoneyFun(state)">{{MoneyText}}</button>
        </li>
      </ul>
      <!-- 借款审核过程 -->
      <div class="Audit" v-if="state ===('2')">
        <div class="Audit-hitbar"><span class="Audit-hitText" v-show="HText">{{hitText}}</span></div>
        <div class="Audit-title"><span>借款审核中{{state}}</span></div>
        <div class="Audit-time clearfix">
          <ul class="Audit-list fl">
            <li class="item-title"><span>还款日期</span></li>
            <li class="item-tiem"><span>2018年2月8日</span></li>
          </ul>
          <ul class="Audit-list fr">
            <li class="item-title"><span>借款时长</span></li>
            <li class="item-tiem"><span>21天</span></li>
          </ul>
        </div>
        <ul class="Audit-btn">
          <!-- 2 审核中 3 还款大于3天 -->
          <li v-if="state ===('2'||'3')">
            <input type="button" class="btn-info" @click="MoneyFun(state)" v-text="MoneyText">
          </li>
          <!-- 还款小于3天 -->
          <li  v-if="state ===('4')">
            <input type="button" class="btn-refund" value="立即还款">
            <input type="button" class="btn-renew" value="申请续借">
          </li>
        </ul>
      </div>
      <!-- 借款流程 -->
      <ul class="MoneyBox">
        <li class="Moneyitem">
          <ul>
            <li class="MoneyImg"><img src="/src/assets/images/icon/jklc.png" alt=""></li>
            <li class="Moneyname1"><span>借款流程</span></li>
            <li class="Moneyname2"><span>有疑问，看流程</span></li>
          </ul>
        </li>
        <li class="Moneyitem">
          <ul>
            <li class="MoneyImg"><img src="/src/assets/images/icon/hk.png" alt=""></li>
            <li class="Moneyname1"><span>快速还款</span></li>
            <li class="Moneyname2"><span>点击进入还款</span></li>
          </ul>
        </li>
      </ul>
      <!-- 注册好礼 -->
      <ul class="sharelist">
        <li class="shareItem">
          <ul class="register">
            <li class="share-hit1"><span>注册即享好礼</span></li>
            <li class="share-hit2"><span>300元本金</span></li>
            <li class="share-btn"><input type="button" @click="SignFun" class="btn" value="立即注册"></li>
          </ul>
        </li>
        <li class="shareItem">
          <div class="jb">
            <img src="/src/assets/images/icon/jb.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <v-Sign :SignFlag="isSign" @isSignFun = "SignEvent"></v-Sign>
    <v-hint :HintFlag="ishint" @isHintFun = "HintEvent"></v-hint>
  </div>
</template>

<script>
import Vue from 'vue';
import Sign from './../../element/sign/sign';
import Hint from './../../element/sign/sign';
import './../../../assets/css/main/index.css';
export default {
  name: 'home',
  components: {
    'v-Sign':Sign,
    'v-hint':Hint,
  },
  data () {
    return {
      isSign:false,//去登陆
      ishint:false,//授权成功提示
      MoneyText:'我要借钱',//btntext
      state:'0',//状态
      MoneyNum:'5000',//money number
      HText:false,// 是否显示提示
      hitText:'',//提示内容
    }
  },
  created () {
    var self = this;
    setTimeout(function(){
      self.MoneyTime(0,self.MoneyNum)
    },1)
  },
  methods: {
    // 页面点击注册
    SignFun:function(){
      this.isSign = true;
    },
    // 弹框父子传值 注册登录
    SignEvent:function(data){
      this.isSign = false;
      if(data){
        this.state = '1';
      }
    },
    //授权
    HintSuc:function(){
      this.ishint = true;
      this.MoneyText='我要借钱';
    },
    // 授权成功
    HintEvent:function(data){
      this.ishint = false;
      var self = this;
      if(data){
        this.state = '2';
        this.MoneyNum = data;
        this.MoneyText = '查看详情';
        this.HText=true,// 是否显示提示
        this.hitText= '恭喜您获得的借款额度为'+ this.MoneyNum +'元',//提示内容
        setTimeout(function(){
          self.MoneyTime(0,self.MoneyNum)
        },1)
      }
    },
    // 点击借钱
    MoneyFun:function(state){
      switch(state){
        case'0':
          alert('请登录')
          return;
        case '1':   //我要借款（还不能）
          this.MoneyText='授信审核中,请稍等片刻';
          this.SetTime(3)
          return;
        case '2':  //可以借
          this.$router.push({name: 'seting'});
          return;
      }
    },
    // 倒计时
    SetTime:function(Num){
      let self = this;
      if(/^[0-9]+.?[0-9]*$/.test(Num)){
        var Time = '';
        self.Time = Num;
      }
      if(self.Time <= 0){
        self.Time = 3;
        this.HintSuc()
      }else{
        self.Time--;
        setTimeout(function(){
        self.SetTime();
        },1000)
      }
    },
    // 钱数倒计时
    MoneyTime:function(num,Aim){
      var self = this;
      num = num + 5;
      self.MoneyNum = num;
      if(num < Aim){
        setTimeout(function(){
          self.MoneyTime(num,Aim)
        },1)
      }
    },
  }
}
</script>

<style scoped lang="stylus">

</style>
