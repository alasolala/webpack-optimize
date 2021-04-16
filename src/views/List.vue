<template>
  <div class="movie-list">
    <div v-for="(item, index) in list" class="movie">
      <img class="cover" :src="item.cover">
      <p>
        <span class="title">{{item.title}}</span>
        <span class="rate">{{item.rate}}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { top20 } from '../api'
export default {
  data(){
    return {
      list: null
    }
  },
  created () {
    top20().then((res) => {
      this.list = res.data.subjects
    })
  }
}
</script>
<style scoped lang="less">
.movie-list{
  width: 700px;
  .movie{
    height: 240px;
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    font-size: 12px;
    margin-right: 15px;
    .cover{
      width: 120px;
      height: 180px;
    }
    .title{
      color: #37a;
    }
    .rate{
      color: #e09015;
    }
  }
}
</style>