<template>
  <div>
  <el-carousel :interval="4000" type="card" height="350px"  boolean>
    <el-carousel-item v-for="item in list" :key="item">
      <img style="-webkit-user-select: none;max-width: 100%;margin: auto;" :src="item.url" />
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Zm',
    data() {
      return {
        url: 'https://api.myjson.com/bins/v4rk2',
        list: []
      };
    },
    created() {
      this.fetch();
    },
    methods: {
      async fetch() {
        const { data } = await this.$http.get(this.url);
        this.list = data.cradlist;
        console.log(this.list);
      },
    }
  };
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
