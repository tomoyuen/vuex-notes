import Vue from 'vue';
import store from './store';
import App from 'components/app.vue';
import 'jquery';
import 'pen';
import 'pen/src/markdown';
import 'pen/src/pen.css';

new Vue({
  store,
  el: '#app',
  components: {
    App
  },
  render(h) {
    return h(App);
  },
  mounted() {
    window.editor = new Pen('#note-editor');
  }
});
