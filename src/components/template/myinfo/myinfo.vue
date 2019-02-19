<template>
  <div class="myinfo">
    <div class="myinfo-box">
      <div class="myinfo-info clearfix">
        <router-link class="myinfo-link" :to="{name:'resume'}">
          <div class="fl myinfo-photo">
            <img :src="pictrue" alt="">
          </div>
          <ul class="fl myinfo-text">
            <li class="text-item tl">{{nickname}}</li>
            <li class="text-item tl">{{PhoneNum}}</li>
          </ul>
        </router-link>
      </div>
      <ul class="myinfo-list">
        <li class="myinfo-item clearfix" v-for="item in list">
          <router-link class="myinfo-link" :to="{name:item.Link}">
            <span class="item-label fl">
              <img :src="item.label" :onerror="iconLogo" alt="">
            </span>
            <span class="item-name fl tl">{{item.name}}</span>
            <img class="item-icon fr" :src="item.iconRight"  alt="">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
import right from './../../../assets/images/icon/right.png';
import jl from'./../../../assets/images/icon/jl.png';
import yhq from'./../../../assets/images/icon/yhq.png';
import yhk from'./../../../assets/images/icon/yhk.png';
import qb from'./../../../assets/images/icon/qb.png';
import wt from'./../../../assets/images/icon/wt.png';
import gywm from'./../../../assets/images/icon/gywm.png';
import yjfk from'./../../../assets/images/icon/yjfk.png';

export default {
  name:'myinfo',
  data(){
    return{
      nickname:'昵称',
      PhoneNum:'12313456465',
      pictrue:require('./../../../assets/images/icon/pictrue.jpg'),
      iconLogo:require('./../../../assets/images/icon/jl.png'),
      list:[{
        name:'借款记录',
        Link:'record',
        label:jl,
        iconRight:right,
      },{
        name:'我的优惠券',
        Link:'coupon',
        label:yhq,
        iconRight:right,
      },{
        name:'我的银行卡',
        Link:'bankCard',
        label:yhk,
        iconRight:right,
      },
      {
        name:'我的钱包',
        Link:'wallet',
        label:qb,
        iconRight:right,
      },
      {
        name:'常见问题',
        Link:'question',
        label:wt,
        iconRight:right,
      },{
        name:'关于我们',
        Link:'AboutUs',
        label:gywm,
        iconRight:right,
      },{
        name:'意见反馈',
        Link:'idea',
        label:yjfk,
        iconRight:right,
      }]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.myinfo-link{
  display:block;
  border-bottom: 1px solid #d6d5d5;
}
.myinfo-link:last-child{
  border:none;
}
</style>
