<template>
  <div class="discount">
    <div class="discount-box">
      <ul class="discount-list">
        <li class="discount-item" v-for="item in Dislist">
          <div class="discount-top clearfix">
            <ul class="discount-left tl fl">
              <li class="discount-title">{{item.Title}}</li>
              <li class="discount-inner">限{{item.Text}}元借款可用</li>
            </ul>
            <ul class="discount-right fr clearfix">
              <li class="discount-number fr">{{item.Num}}</li>
              <li class="discount-flag fr">
                <img src="./../../../assets/images/icon/rmb2.png" alt="">
              </li>
            </ul>
          </div>
          <div class="discount-bottom relative">
            <div class="circle-left absolute"></div>
            <div class="circle-right absolute"></div>
            <span class="discount-time tl">有效期:{{item.Time}}</span>
          </div>
        </li>
      </ul>
      <input class="next-btn" @click="NextBtn" type="button" :value="BtnText">
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'discount',
  data(){
    return{
      BtnText:'确定',
      Dislist:[{
        Title:'借款通用优惠券',
        Text:'500',
        Num:'15',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        Text:'1000',
        Num:'20',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        Text:'1500',
        Num:'25',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        Text:'2000',
        Num:'30',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        Text:'3000',
        Num:'35',
        Time:'2018.1.02-2018.2.02',
      }]
    }
  },
  methods: {
    NextBtn:function(){
    },
  }
}
</script>

<style scoped>

</style>
