<template>
  <div class="record">
    <div class="record-box">
      <div class="record-nav clearfix">
        <ul class="rnav-box fl" @click="navbtnEvent" :class="{active:navbtn}">
          <li class="rnav-title"><span>尚未结束</span></li>
          <li class="rnav-Str"></li>
        </ul>
        <ul class="rnav-box fl" @click="navbtnEvent" :class="{active:!navbtn}">
          <li class="rnav-title">已结束</li>
          <li class="rnav-Str"></li>
        </ul>
      </div>
      <ul class="record-list">
        <li class="record-item" v-for="item in list" v-if="(navbtn?item.isShow:!item.isShow)">
          <ul class="record-top clearfix">
            <li class="record-left fl">
              <ul>
                <li class="record-flag" :class="RecordFlag(item.flag)">
                  <span class="flag-title">{{item.Title}}</span>
                </li>
                <li class="record-num">
                  <span class="record-img"><img src="/src/assets/images/icon/rmb1.png" alt=""></span>
                  <span class="record-text">{{item.number}}</span>
                </li>
              </ul>
            </li>
            <li class="record-right fr">
              <span class="record-cord">{{item.name}}</span>
              <span class="record-borrow">申请日期：{{item.start}}</span>
              <span class="record-repay">还款日期：{{item.end}}</span>
            </li>
          </ul>
          <ul class="record-bottom clearfix">
            <li class="record-left fl">
              <span>借款期限：{{item.date}}天</span>
              <span>还款金额(元)：{{item.money}}</span>
            </li>
            <li class="record-right fr">
              <input type="button" v-if="item.isShow" class="btn" value="立即还款">
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
// import Sign from './../../element/sign/sign';
import './../../../assets/css/main/index.css';
export default {
  name:'record',
  components: {

  },
  data () {
    return {
      navbtn :true,
      FlagTitle:'',
      Flag:'',
      list:[
        {flag:'start',isShow:true,Title:'已放款',number:'5000',name:'招商银行(3022)',start:'2017.12.12',end:'2018.12.12',date:'21',money:'800.12'},
        {flag:'course',isShow:true,Title:'审核中',number:'5000',name:'招商银行(3022)',start:'2017.12.12',end:'2018.12.12',date:'21',money:'800.12'},
        {flag:'overdue',isShow:true,Title:'已逾期',number:'5000',name:'招商银行(3022)',start:'2017.12.12',end:'2018.12.12',date:'21',money:'800.12'},
        {flag:'finish',isShow:false,Title:'已结束',number:'5000',name:'招商银行(3022)',start:'2017.12.12',end:'2018.12.12',date:'21',money:'800.12'},
        {flag:'efficacy',isShow:false,Title:'失败',number:'5000',name:'招商银行(3022)',start:'2017.12.12',end:'2018.12.12',date:'21',money:'800.12'},

      ]
    }
  },
  methods: {
    // 导航
    navbtnEvent(){
      this.navbtn = !this.navbtn;
    },
    // 颜色
    RecordFlag(Flag){
      switch(Flag){
        case 'start':
          this.FlagTitle ='已放款';
          return 'start';
        case 'course':
          this.FlagTitle ='审核中';
          return 'course';
        case 'overdue':
          this.FlagTitle ='已逾期';
          return 'overdue';
        case 'finish':
          this.FlagTitle ='已结束';
          return 'finish';
        case 'efficacy':
          this.FlagTitle ='失败';
          return 'efficacy';
      }
    }
  }
}
</script>
<style scoped>

</style>
