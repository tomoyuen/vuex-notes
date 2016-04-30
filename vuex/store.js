import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes: [
	  {
	    "text": "this is more than imagenation, i will go first heading in my faction",
	    "favorite": false
	  },
	  {
	    "text": "wow, this is so wonderful",
	    "favorite": true
	  }
	],
	activeNote: {}
}

const mutations = {
	ADD: function(state) {
		const newNote = {
			text: 'New note',
			favorite: false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	EDIT: function(state, text) {
		state.activeNote.text = text
	},
	DELETE: function(state) {
		state.notes.$remove(state.activeNote)
		state.activeNote = state.notes[0]
	},
	FAVORITE: function(state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	SET_ACTIVE: function(state, note) {
		state.activeNote = note
	}
}

export default new Vuex.Store({
	state,
	mutations
})
