/* global editor */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/database';

Vue.use(Vuex);

const config = {
  apiKey: 'AIzaSyCKs7Yk5RnkvaOQ2PXv8uPvYSJaMpP2RhE',
  authDomain: 'radiant-inferno-8201.firebaseapp.com',
  databaseURL: 'https://radiant-inferno-8201.firebaseio.com',
  storageBucket: 'radiant-inferno-8201.appspot.com',
};
firebase.initializeApp(config);

const db = firebase.database(),
  ref = db.ref('saving-data/notes'),
  state = {
    notes: {},
    activeNote: {},
    activeKey: ''
  };

ref.on('value', (snapshot) => {
  state.notes = snapshot.val();
  state.activeKey = Object.keys(state.notes)[0];
  state.activeNote = state.notes[state.activeKey];
});


const mutations = {
  add(state) {
    const newNote = {
      text: '<p>New note</p>',
      favorite: false
    }

    var addRef = ref.push()

    state.activeKey = addRef.key
    addRef.set(newNote)
    state.activeNote = newNote
  },
  edit(state) {
    ref.child(state.activeKey).update({
      text: editor.getContent(),
    })
  },
  delete(state) {
    ref.child(state.activeKey).set(null)
  },
  favorite(state) {
    state.activeNote.favorite = !state.activeNote.favorite
    ref.child(state.activeKey).update({
      favorite: state.activeNote.favorite
    })
  },
  setActive(state, data) {
    state.activeKey = data.key;
    state.activeNote = data.val;
  }
};

const actions = {
  addNote: ({ commit }) => commit('add'),
  editNote: ({ commit }, event) => commit('edit', event.target.value),
  deleteNote: ({ commit }) => commit('delete'),
  setActive: ({ commit }, payload) => commit('setActive', payload),
  favoriteNote: ({ commit }) => commit('favorite'),
};

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote,
  activeKey: state => state.activeKey,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
