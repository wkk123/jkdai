<template>
  <div class="discount">
    <div class="discount-box coupon">
      <ul class="coupon-list relative clearfix">
        <li class="coupon-item fl relative" :class="{active:isCou}" @click="Nav">
          <span class="item-text">未使用</span>
          <div class="item-str absolute"></div>
        </li>
        <li class="coupon-item fl relative" :class="{active:!isCou}" @click="Nav">
          <span class="item-text">已失效</span>
          <div class="item-str absolute"></div>
        </li>
      </ul>
      <ul class="discount-list">
        <li class="discount-item relative" v-for="item in Dislist" :class="{active:item.isFlag}" v-if="isCou?!item.isFlag:item.isFlag">
          <div class="discount-top clearfix">
            <ul class="discount-left tl fl">
              <li class="discount-title">{{item.Title}}</li>
              <li class="discount-inner">限{{item.Text}}元借款可用</li>
            </ul>
            <ul class="discount-right fr clearfix">
              <li class="discount-number fr">{{item.Num}}</li>
              <li class="discount-flag fr" v-if="false">
                <img :src="Rrem" alt="">
              </li>
              <li class="discount-flag fr">
                <img :src="Grem" alt="">
              </li>
            </ul>
          </div>
          <div class="discount-bottom relative">
            <div class="circle-left absolute"></div>
            <div class="circle-right absolute"></div>
            <span class="discount-time tl">有效期:{{item.Time}}</span>
          </div>
          <div class="coupon-flag absolute" v-if="false">
            <img :src="LoseImg" alt="">
          </div>
        </li>
      </ul>
    </div>
    <Convert v-if="isConvert"></Convert>
  </div>
</template>
<script>
import Vue from 'vue';
import Convert from './../../element/convert/convert'
import './../../../assets/css/main/index.css';
import Rrem from './../../../assets/images/icon/rmb2.png';
import Grem from './../../../assets/images/icon/rmb5.png';
import loseImage from './../../../assets/images/icon/sx.png';
export default {
  name:'coupon',
  data(){
    return{
      isCou:true,
      isConvert:false,
      Grem:Grem,
      LoseImg:loseImage,
      Dislist:[{
        Title:'借款通用优惠券',
        isFlag:false,
        Text:'500',
        Num:'15',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:false,
        Text:'1000',
        Num:'20',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:false,
        Text:'1500',
        Num:'25',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:false,
        Text:'1000',
        Num:'20',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:true,
        Text:'1500',
        Num:'25',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:false,
        Text:'2000',
        Num:'30',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:true,
        Text:'3000',
        Num:'35',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:true,
        Text:'2000',
        Num:'30',
        Time:'2018.1.02-2018.2.02',
      },{
        Title:'借款通用优惠券',
        isFlag:false,
        Text:'3000',
        Num:'35',
        Time:'2018.1.02-2018.2.02',
      }]
    }
  },
  components: {
    Convert
  },
  methods: {
    NextBtn:function(){
    },
    Nav:function(){
      this.isCou = !this.isCou;
    },
  }
}
</script>

<style scoped>
.discount-box.coupon{
  width:100%!important;
  height:100%!important;
  overflow-y: hidden;
}
.discount-box.coupon .discount-list{
  width:100%;
  height:calc(100% - 1.1rem);
  overflow-y:auto;
  padding: 0.2rem 0.3rem;
  margin-top:0;
}
.discount-item.active .discount-title{
  color:#999999!important;
}
.discount-item.active .discount-inner{
  color:#999999!important;
}
.discount-item.active .discount-number{
  color:#999999!important;
}
.discount-item.active .discount-time{
  color:#999999!important;
}
.discount-item.active .discount-flag{
  width:0.4rem!important;
  height:0.4rem!important;
}
</style>
