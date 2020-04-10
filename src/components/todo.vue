<template>
  <div class="hello">
    <h1 class="mb-5">{{ msg }}</h1>
		<div class="container">
			<div class="row justify-content-center">
					<div class="col-md-8 col-lg-6 col-sm-10">
						<div class="card">
							<div class="card__head d-flex align-items-center justify-content-between pl-3 pr-3 pt-2 pb-2 mb-3">
								<h5 class="h5 text-dark mb-0">TODO List</h5>
								<button class="btn btn-outline-dark rounded-circle card__delete" @click="removeThis">
									<trash :size="24"/>
								</button>
							</div>
							<div class="card__body p-3">
									<ul class="list-unstyled mb-5">
										<li v-for="(item, index) in this.$store.state.todos" :key="item.id">
											<todoitem :id="item.id" :done="item.done" :message="item.text"/>
										</li>
									</ul>
									<div class="input-group pb-3">
										<div class="input-group-prepend">
											<button class="btn btn-outline-dark rounded-circle card__add" @click="addTask">
												<plus :size="20"/>
											</button>
										</div>
										<input v-if="invalid" type="text" v-model.trim="inputValue" class="form-control rounded card__input border-danger" placeholder="Введите задачу" v-on:keyup.enter="addTask">
										<input v-else type="text" v-model.trim="inputValue" class="form-control rounded card__input" placeholder="Введите задачу" v-on:keyup.enter="addTask">
										<span v-if="invalid" class="text-danger card__invalid">Поле не валидно</span>
									</div>
							</div>
						</div>
					</div>
			</div>
		</div>
		
  </div>
</template>

<script>
import trash from 'vue-material-design-icons/Delete.vue';
import plus from 'vue-material-design-icons/Plus.vue';
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex';

export default {
  name: 'toDoList',
  props: {
		msg: String,
	},
	data: function() {
		return {
			inputValue: '',
			invalid: false
		}
	},
	components: {
		trash,
		plus
	},
	methods: {
		...mapMutations([
			'removeItem',
			'addItem',
		]),
		removeThis() {
			return this.removeItem();
		},
		addTask(event) {
			if (this.inputValue.length>3) {
				//console.log(this.inputValue);
				this.addItem(this.inputValue);
				this.inputValue = '';
				this.invalid = false;
			} else {
					this.invalid = true;
			}
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.card
	overflow hidden
	box-shadow 0px 0px 10px rgba(0,0,0,0.2)
	&__invalid
		position: absolute
		bottom -7px
		left 58px
		font-size 12px
	&__head
		background-color rgba(211,211,211,0.4)
	&__delete
		border none
		width 50px
		height 50px
		box-shadow none !important
	&__add
		border none
		width 40px
		height 40px
		box-shadow none !important
		margin-right 20px
		padding-left 0
		padding-right 0
		text-align center
	&__input
		&.border-danger
			color: #dc3545
			&:focus,
			&:active
				box-shadow 0 0 0 0.2rem rgba(165, 42, 42, 0.4);
		&:focus,
		&:active,
		&:hover
			border 1px solid lightblue;
		&:focus,
		&:active
			box-shadow 0 0 0 0.2rem rgba(173, 216, 230, 0.4);
</style>
