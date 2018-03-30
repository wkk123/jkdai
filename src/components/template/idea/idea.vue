<template>
  <div class="idea">
    <div class="idea-box">
      <textarea class="idea-text" name="" id="" cols="30" rows="10" placeholder="请反馈您的问题，我们会尽快解决" v-model="idea"></textarea>
      <input class="idea-btn" type="button" value="提交">
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import './../../../assets/css/main/index.css';
export default {
  name:'idea',
  data(){
    return{
      idea:'',
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
