<template>
  <div class="bargain">
    <div class="bargain-box">
      <ul class="bargain-list">
        <li class="bargain-item tl" v-for="item in list">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'bargain',
  data(){
    return{
      list:[
        {text:'中国银行'},
        {text:'工商银行'},
        {text:'农行银行'},
        {text:'建设银行'},
        {text:'交通银行'},
        {text:'招商银行'}
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
