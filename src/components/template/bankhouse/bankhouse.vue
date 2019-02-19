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
        {text:'借款协议'},
        {text:'委托融资协议'}
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
