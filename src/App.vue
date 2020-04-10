<template>
  <div id="app">
    <toDoList msg="ToDoList App"/>
  </div>
</template>

<script>
import toDoList from './components/todo.vue'

export default {
  name: 'App',
  components: {
		toDoList,
  }
}
</script>

<style lang="stylus">
@font-face {
	font-family: 'Arial';
	src: url('~@/assets/arial.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}
#app
	font-family 'Arial', sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	color #2c3e50
	margin-top 60px
	h1
		text-align center
</style>
