import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

firebase.initializeApp({
	apiKey: 'radiant-inferno-8201',
  databaseURL: 'https://radiant-inferno-8201.firebaseio.com',
  serviceAccount: 'path/to/serviceAccountCredentials.json'
});

const db = firebase.database(),
	ref = db.ref('saving-data/notes'),
	state = {
		notes: {},
		activeNote: {},
		activeKey: ''
	};

ref.on("value", function(snapshot) {
  state.notes = snapshot.val();
});


const mutations = {
	ADD: function(state) {
		const newNote = {
			text: 'New note',
			favorite: false
		}

		var addRef = ref.push()

		state.activeKey = addRef.key
		addRef.set(newNote)
		state.activeNote = newNote
	},
	EDIT: function(state, text) {
		ref.child(state.activeKey).update({
			text: text
		})
	},
	DELETE: function(state) {
		ref.child(state.activeKey).set(null)
	},
	FAVORITE: function(state) {
		state.activeNote.favorite = !state.activeNote.favorite
		ref.child(state.activeKey).update({
			favorite: state.activeNote.favorite
		})
	},
	SET_ACTIVE: function(state, key, note) {
		state.activeKey = key
		state.activeNote = note
	}
}

export default new Vuex.Store({
	state,
	mutations
})
