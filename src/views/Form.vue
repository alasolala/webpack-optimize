<template>
  <div>
    <label>你最喜欢的电影：<input type="text" v-model="favorite"/></label>
    <p>{{favorite}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        favorite: ''
      }
    }
  }
</script>