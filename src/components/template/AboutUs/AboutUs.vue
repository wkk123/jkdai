<template>
  <div class="AboutUs">
    <div class="AboutUs-box">
      <ul class="AboutUs-list">
        <li class="AboutUs-item">
          <div class="clearfix">
            <span class="AboutUs-text fl">服务于隐私协议</span>
            <div class="AboutUs-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="AboutUs-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="AboutUs-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="AboutUs-item">
          <div class="clearfix">
            <span class="AboutUs-text fl">去评分</span>
            <div class="AboutUs-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="AboutUs-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="AboutUs-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="AboutUs-item">
          <div class="clearfix">
            <span class="AboutUs-text fl">产品介绍</span>
            <div class="AboutUs-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="AboutUs-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="AboutUs-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="AboutUs-item">
          <div class="clearfix">
            <span class="AboutUs-text fl">联系我们</span>
            <div class="AboutUs-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="AboutUs-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="AboutUs-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="AboutUs-item">
          <div class="clearfix">
            <span class="AboutUs-text fl">客服QQ</span>
            <div class="AboutUs-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="AboutUs-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="AboutUs-answer" v-if="false"><span>可以</span></div>
        </li>
        <li class="AboutUs-item">
          <div class="clearfix">
            <span class="AboutUs-text fl">客服微信</span>
            <div class="AboutUs-flag fr"><img src="/src/assets/images/icon/down.png" alt=""></div>
            <div class="AboutUs-flag fr" v-if="false"><img src="/src/assets/images/icon/up.png" alt=""></div>
          </div>
          <div class="AboutUs-answer" v-if="false"><span>逾期将影响您在征信系统及芝麻信用的评分，进而对您的生活造成不便，因此我们督促您按时还款。</span></div>
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
  name:'AboutUs',
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
