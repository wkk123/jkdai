<template>
  <ul class="topBox" :style="headStyle">
    <li class="topBack">
      <i class="icon" :class="leftBtn()" @click="leftBtnEvent"></i>
    </li>
    <li class="topTitle" v-if="!isBargain">
      <h3 class="title">{{title}}</h3>
    </li>
    <li class="topNext" v-if="!isBargain">
      <i class="icon" :class="rightBtn()" @click="rightBtnEvent"></i>
    </li>
    <li class="topTitle1" v-if="isBargain">
      <h3 class="title">{{title}}</h3>
    </li>
    <li class="topNext1" v-if="isBargain">
      <i class="icon" :class="rightBtn()" @click="rightBtnEvent">{{barText}}</i>
    </li>
  </ul>
</template>
<script>
export default {
  name:'title',
  props:{
    title:{
      type:String,
      default:'即刻贷',
      required:true,
    },
    barText:{
      type:String,
      default:'',
    },
    fontColor:{
      type:String,
      default:'#333333',
    },
    backColor:{
      type:String,
      default:'#ffffff',
    },
    leftBtnTyple:{
      type:String,
      default:'',
    },
    rightBtnTyple:{
      type:String,
      default:'',
    }
  },
  computed:{
    headStyle(){
      return{
        background:this.backColor,
        color:this.fontColor
      }
    }
  },
  data () {
    return {
      isBargain:false,
    }
  },
  methods: {
    // 后退
    GoBack(){
      window.history.go(-1);
      this.isBargain = false;
    },
    // 消息
    GoNews(){
      this.$router.push({name: 'messagebox'});
    },
    // 设置
    seting(){
      this.$router.push({name: 'seting'});
    },
    BarGain(){

    },
    // 左边操作
    leftBtnEvent(){
      switch(this.leftBtnTyple){
        case 'back':
          this.GoBack()
          return;
        case 'back1':
          this.GoBack()
          return;
        case 'null':
          return;
      }
    },
    // 右边操作
    rightBtnEvent(){
      switch(this.rightBtnTyple){
        case 'news':
          this.GoNews();
          return;
        case 'seting':
          this.seting();
        case 'isBargain':
          this.BarGain();
        case 'null':
          return;
      }
    },
    // 左边样式
    leftBtn(){
      switch(this.leftBtnTyple){
        case 'back':
          return 'back';
        case 'back1':
          return 'back1';
      }
    },
    // 右边样式
    rightBtn(){
      switch(this.rightBtnTyple){
        case 'news':
          return 'news';
        case 'seting':
          return 'seting';
        case 'isBargain':
          this.isBargain = true;
          return;
      }
    },
  }

}
</script>
<style scoped>
.topBox{
  width:100%;
  height:1.0rem;
  line-height:1.0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10000;
}
.topBack,.topNext{
  width:1.0rem;
  height:100%;
}
.topBack .icon,.topNext .icon{
  width: 100%;
  height: 100%;
  display: inline-block;
  background-repeat:no-repeat;
  background-position: center;
}
.topNext1{
  width:2.0rem;
  height:100%;
  font-size: 0.32rem;
  line-height:1.0rem;
}
.topNext1 .icon{
  width: 100%;
  height: 1.0rem;
  display: inline-block;
}
.topBack .icon.back{
  background-size:0.35rem 0.5rem;
  background-image: url(../../assets/images/icon/back.png);
}
.topBack .icon.back1{
  background-size:0.65rem 0.65rem;
  background-image: url(../../assets/images/icon/left.png);
}
.topNext .icon.news{
  background-size:0.5rem 0.5rem;
  background-image: url(../../assets/images/icon/xx.png);
}
.topNext .icon.seting{
  background-size:0.4rem 0.4rem;
  background-color:#26b0ff;
  background-image: url(../../assets/images/icon/seting.png);
}
.topTitle{
  width:calc(100% - 2.0rem);
  height:100%;
}
.topTitle .title{
  font-size:0.36rem;
  font-weight: 100;

}
.topTitle1{
  width:calc(100% - 4.0rem);
  height:100%;
  margin-left:1.0rem;
}
.topTitle1 .title{
  font-size:0.36rem;
  font-weight: 100;

}
</style>


