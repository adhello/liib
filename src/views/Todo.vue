<template>
  <div class="todo-list">
    <div id="nav" >
      <el-menu  class="el-menu-demo" mode="horizontal" id="menu" @select="handleSelect">
        <el-menu-item index="1" >
          <router-link to="/" >
            <el-image style="width: 68px;height: 60px;padding: 0" :src="url1"></el-image>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2" >
          <router-link to="/about" >首页</router-link>
        </el-menu-item>
        <el-menu-item index="3" >
          <router-link to="/home" >Cardlist</router-link>
        </el-menu-item>
        <el-menu-item index="4" >
          <router-link to="/todo" >Todolist</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    Todo-List
    <TodoLists :data-source="list">TodoLists</TodoLists>
  </div>

</template>

<script>

  // 导入组件
  // eslint-disable-next-line import/no-self-import
  import TodoLists from '@/components/TodoList';

  export default {
    name: 'Todo',
    components: {
      TodoLists
    },
    data() {
      return {
        url: 'https://api.myjson.com/bins/ervk2',
        list: []
      };
    },
    created() {
      this.fetch();
    },
    methods: {
      async fetch() {
        const { data } = await this.$http.get(this.url);
        this.list = data.List;
      }
    }
  };
</script>

<style scoped>

</style>
