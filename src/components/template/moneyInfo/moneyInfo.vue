<template>
  <div class="moneyInfo">
    <div class="moneyInfo-box">
      <div class="moneyInfo-info">
        <div class="moneyInfo-title"><span>借款额度(元)</span></div>
        <div class="moneyInfo-num">
          <span class="num-flag fl"><img src="./../../../assets/images/icon/rmb3.png" alt=""></span>
          <span class="num-number fl">{{moneyNum}}</span>
        </div>
      </div>
      <ul class="moneyInfo-bar clearfix">
        <li class="bar-title fl">
          <span class="title-time">借款时间</span>
          <span class="title-num">{{barTime}}</span>
        </li>
        <li class="bar-text fl">
          <span>{{StateText}}</span>
        </li>
      </ul>
      <ul class="moneyInfo-list" v-for="item in list">
        <div class="list-title tl">{{item.title}}</div>
        <li class="moneyInfo-item clearfix" v-for="it in item.item">
          <span class="item-label fl">{{it.label}}</span>
          <span class="item-name fr tl">{{it.name}}</span>
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
  name:'moneyInfo',
  data(){
    return{
      BtnText:'立即还款',
      moneyNum:'5000',
      barTime:'2017.08.23 10:45',
      StateText:'已放款',
      list:[
      {
        title:'借款信息',
        item:[
          {
            label:'借款金额(元)',
            name:'800.00',
          },
          {
            label:'收到银行卡',
            name:'招商银行（1960）',
          },
          {
            label:'借款周期',
            name:'21天',
          },
          {
            label:"还款截止日",
            name:'2017.09.18',
          },
          {
            label:'借款人姓名',
            name:'张建国',
          },
          {
            label:'借款编号',
            name:'61234567894794',
          },
          {
            label:'借款状态',
            name:'已放款',
          },
        ],
      },
      { title:'费用信息',
        item:[
          {
            label:'技术服务费(元)',
            name:'800.00',
          },
          {
            label:'技术服务状态',
            name:'未收取',
          },
          {
            label:'到期利息（元）',
            name:'11.05',
          },
          {
            label:"利息状态",
            name:'未还清',
          },
          {
            label:'逾期利息（元）',
            name:'12.00',
          },
          {
            label:'逾期利息状态',
            name:'未还清',
          }
        ]
      }
      ]
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
