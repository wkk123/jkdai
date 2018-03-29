<template>
  <div class="question">
    <div class="question-box">
      <ul class="question-list">
        <li class="question-item">
          <div class="clearfix">
            <span class="question-text fl">我能在即刻贷借到钱吗？</span>
            <div class="question-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="question-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="question-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="question-item">
          <div class="clearfix">
            <span class="question-text fl">即刻贷的借款通过率高吗？</span>
            <div class="question-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="question-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="question-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="question-item">
          <div class="clearfix">
            <span class="question-text fl">即刻贷的审核需要多久？</span>
            <div class="question-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="question-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="question-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="question-item">
          <div class="clearfix">
            <span class="question-text fl">我朋友的身份证/手机号/信用卡/芝麻信分等资料可以吗？</span>
            <div class="question-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="question-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="question-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="question-item">
          <div class="clearfix">
            <span class="question-text fl">绑定银行卡不成功？</span>
            <div class="question-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="question-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="question-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="question-item">
          <div class="clearfix">
            <span class="question-text fl">逾期将对我的信用记录有影响？</span>
            <div class="question-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="question-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="question-answer" v-if="false"><span>逾期将影响您在征信系统及芝麻信用的评分，进而对您的生活造成不便，因此我们督促您按时还款。</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Sign from './../../element/sign/sign';
import './../../../assets/css/main/index.css';
export default {
  name:'question',
  components: {

  },
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
