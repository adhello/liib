<template>
  <div >
    <Header></Header>

    Todo-List
    <TodoLists :data-source="list">TodoLists</TodoLists>
  </div>

</template>

<script>

  // 导入组件
  // eslint-disable-next-line import/no-self-import
  import TodoLists from '@/components/TodoList';
  import Header from '@/components/Header';

  export default {
    name: 'Todo',
    components: {
      Header,
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
