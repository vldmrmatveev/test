import Vue from 'vue'
import Vuex from 'vuex'
var ID = 5;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		todos: [
			{ id: 1, text: 'Покормить собаку', done: false },
			{ id: 2, text: 'Купить еду', done: false },
			{ id: 3, text: 'Помыть посуду', done: false },
			{ id: 4, text: 'Помыть посуду и полы', done: false }
		]
	},
	getters: {
	},
  mutations: {
		changeTodos(state, id) {
			state.todos.forEach( item => {
				if(item.id === id) item.done = !item.done;
			})
		},
		removeItem(state, getters) {
			state.todos = state.todos.filter(todo => !todo.done);
		},
		addItem(state, title) {
			state.todos.push({id:ID++, text: title, done: false});
		},
  },
  actions: {
  },
  modules: {
  }
})