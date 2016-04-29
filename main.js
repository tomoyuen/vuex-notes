import Vue from 'vue'
import store from './vuex/store'
import App from './components/app.vue'

new Vue({
	store: store,
	el: 'body',
	components: {App}
})
