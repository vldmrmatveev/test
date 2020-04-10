<template>
	<div>
		<label :id="id" @click="changeInput(id)">
			<span class="truecheckbox mr-2">
				<radiochecked v-if="done" :size="24"/>
				<radio v-else :size="24"/>
			</span>
			<span v-if="done"><em>{{message}}</em></span>
			<span v-else>
				{{message}}
			</span>
		</label>
	</div>
</template>
<script>
import radio from 'vue-material-design-icons/CheckboxBlankCircleOutline.vue';
import radiochecked from 'vue-material-design-icons/CheckboxMarkedCircleOutline.vue';
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex';
export default {
  name: 'todoitem',
  props: {
		message: String,
		id: Number,
		done: Boolean
	},
	components: {
		radio,
		radiochecked,
	},
	methods: {
		...mapMutations([
		'changeTodos', 
	]),
		changeInput(index) {
			return this.changeTodos(index);
		}
	}
}
</script>