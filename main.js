import Vue from 'vue';
import store from './vuex/store';
import App from './components/app.vue';
import 'pen';
import 'pen/src/markdown';
import 'pen/src/pen.css';

new Vue({
	store: store,
	el: 'body',
	components: {
		App
	},
	ready() {
		window.editor = new Pen('#note-editor');
	}
});
