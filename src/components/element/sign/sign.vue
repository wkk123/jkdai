<template>
  <div>
    <!-- 注册 -->
    <div class="sign" v-if="SignFlag">
      <div class="popup-box">
        <ul class="clearfix header">
          <li class="fl sign-name">
            <span>注册</span>
          </li>
          <li class="fr" @click="CloseBtn">
            <div class="sign-close">
              <img src="/src/assets/images/icon/X.png" alt="">
            </div>
          </li>
        </ul>
        <ul class="sign-number">
          <li class="item-num">
            <input type="number" placeholder="请输入您本人的手机号码">
          </li>
          <li class="item-code clearfix">
            <input class="fl" type="number" placeholder="请输入验证码">
            <input class="fr code-btn" @click="CodeBtn" :class="{active:CodeColor}" type="button" :value="CodeText">
          </li>
          <li class="item-pass">
            <input type="password" placeholder="请设置登录密码(6-16位)">
          </li>
        </ul>
        <div class="sign-protocol">
          <div class="sign-box clearfix">
            <div class="fl sign-select" @click="DealFun">
              <img :src="Deal?select1:select2" alt="">
            </div>
            <span class="fl">我已阅读并同意</span>
            <span class="fl"><router-link class="sign-deal" :to="{name:'protocol'}">《服务与隐私协议》</router-link></span>
          </div>
        </div>
        <div class="sign-btn"><input class="btn" type="button"  @click="signLogin" value="注册并登录"></div>
        <div class="sign-register clearfix">
          <span class="fr sign-login" @click="GoLogin">去登陆</span>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <div class="login" v-if="isLogin">
      <div class="popup-box">
        <ul class="clearfix header">
          <li class="fl login-name">
            <span>登录</span>
          </li>
          <li class="fr" @click="CloseLogin">
            <div class="login-close">
              <img src="/src/assets/images/icon/X.png" alt="">
            </div>
          </li>
        </ul>
        <ul class="login-number">
          <li class="item-num"><input type="number" placeholder="请输入您本人的手机号码"></li>
          <li class="item-pass"><input type="password" placeholder="请输入登录密码"></li>
        </ul>
        <div class="login-protocol">
          <div class="login-box clearfix">
            <div class="fl login-select" @click="DealFun">
              <img :src="Deal?select1:select2" alt="">
            </div>
            <span class="fl">记住登录密码</span>
          </div>
        </div>
        <div class="login-btn"><input class="btn" type="button" value="登录" @click="LoginFun"></div>
        <div class="login-register clearfix">
          <span class="fr login-password">
            <router-link :to="{name:'ResetLogin'}">忘记密码</router-link>
          </span>
        </div>
      </div>
    </div>
    <!-- 提示 -->
    <div class="hint" v-if="HintFlag">
      <div class="popup-box">
        <ul class="clearfix header">
          <li class="fl hint-name"></li>
          <li class="fr">
            <div class="hint-close" @click="CloseSuc">
              <img src="/src/assets/images/icon/X.png" alt="">
            </div>
          </li>
        </ul>
        <ul class="hint-money">
          <li class="hint-title"><span>恭喜您获得借款额度（元）</span></li>
          <li class="hint-num"><span class="flag"><img src="./../../../assets/images/icon/rmb1.png" alt=""></span><span>{{money}}</span></li>
        </ul>
        <div class="hint-btn"><input class="btn" @click="Succeed" type="button" value="好的"></div>
      </div>
    </div>
    <!-- 授权失败 -->
    <div class="defeated" v-if="isDefeated">
      <div class="popup-box">
        <ul class="clearfix header">
          <li class="fl defeated-name"></li>
          <li class="fr">
            <div class="defeated-close">
              <img src="/src/assets/images/icon/X.png" alt="">
            </div>
          </li>
        </ul>
        <ul class="defeated-box">
          <li class="defeated-img"><img src="/src/assets/images/icon/deleted.png" alt=""></li>
          <li class="defeated-title"><span v-text="update?'您的授权额度已过期，请更新信息':'很抱歉，您没有获得借款额度'"></span></li>
        </ul>
        <div class="defeated-btn"><input class="btn" type="button" :value="update?'立即更新':'我知道了'"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
import select1 from './../../../assets/images/icon/select1.png'
import select2 from './../../../assets/images/icon/select2.png'

export default {
  name:'Sign',
  props:{
    SignFlag:{
      type:Boolean,
    },
    HintFlag:{
      type:Boolean,
    }
  },
  data () {
    return {
      CodeColor:false,//获取验证码背景色
      Deal:false,//是否同意
      select1:select1,
      select2:select2,
      isLogin:false,//登录
      isDefeated:false,//失败 与 更新
      update:false,// 更新
      CodeText:'获取验证码',
      Num : 60,
      money:4800,
    }
  },
  methods: {
    // 注册并登陆
    signLogin:function(){
      this.CloseBtn(true);
    },
    // 登录
    LoginFun:function(){
      this.isLogin = !this.isLogin;
      this.CloseBtn(true);
    },
    // 关闭登录弹框
    CloseLogin:function(){
      this.isLogin = !this.isLogin;
      this.CloseBtn(false);
    },
    // 去登陆
    GoLogin:function(){
      this.CloseBtn(false);
      this.isLogin = !this.isLogin;
    },
    // 关闭弹窗
    CloseBtn:function(data){
      this.$emit('isSignFun',data)
    },
    // 关闭
    CloseSuc:function(){
      this.$emit('isHintFun',false)
    },
    // 关闭成功(好的)
    Succeed:function(){
      this.$emit('isHintFun',this.money)
    },
    // 获取验证码
    CodeBtn:function(){
      this.SetTime();
      this.CodeColor = true;
      console.log('验证码',this.addNumber(4))
    },
    // 随机产生4位验证码
    addNumber:function (_idx){
      var str = '';
      for(var i = 0; i < _idx; i += 1){
      str += Math.floor(Math.random() * 10);
      }
      return str;
    },
    // 倒计时
    SetTime:function(){
      let self = this;
      if(this.Num <= 0){
        this.CodeText = '获取验证码';
        this.Num = 60;
        this.CodeColor = false;
      }else{
        this.CodeText = '(重发'+this.Num+'s)';
        this.Num--;
        setTimeout(function(){
        self.SetTime();
        },1000)
      }
    },
    // 勾选同意
    DealFun:function(){
      this.Deal = !this.Deal;
    }
  }
}
</script>
<style lang="stylus" scoped>
.item-code .code-btn{
  padding:0!important;
}
</style>

