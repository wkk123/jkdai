<template>
  <div class="messagesbox">
    <div class="messagesbox-box">
      <ul class="messagesbox-list">
        <li class="messagesbox-item" v-for="item in list">
          <router-link class="item-link" :to="{name:item.Link}">
            <div class="fl item-icon" :style="{background:item.Color}">
              <img :src="item.img" alt="flag">
            </div>
            <div class="fl item-text">
              <ul>
                <li class="clearfix item-top">
                  <span class="fl item-title">{{item.title}}</span><span class="fr item-time">{{item.time}}</span>
                </li>
                <li><span class="item-inner">{{item.text}}</span></li>
              </ul>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
import tz from './../../../assets/images/icon/tz.png';
import gg from './../../../assets/images/icon/gg.png';
import hd from './../../../assets/images/icon/hd.png';

export default {
  name:'messagesbox',
  data(){
    return{
      list:[
        {img:gg,Color:'#26b0ff',Link:'message',title:'系统维护公告',time:'08/09 16:04',text:'随便说点什么'},
        {img:tz,Color:'#ffc03a',Link:'message',title:'借款放款通知',time:'08/09 16:04',text:'随便说点什么'},
        {img:tz,Color:'#ffc03a',Link:'message',title:'额度评估完毕',time:'08/09 16:04',text:'随便说点什么'},
        {img:hd,Color:'#5dcfdd',Link:'message',title:'活动标题',time:'08/09 16:04',text:'随便说点什么'},
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
