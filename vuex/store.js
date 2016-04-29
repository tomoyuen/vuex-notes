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
	add: function(state) {
		const newNote = {
			text: 'New note',
			favorite: false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	edit: function(state, text) {
		state.activeNote.text = text
	},
	delete: function(state) {
		state.notes.$remove(state.activeNote)
		state.activeNote = state.notes[0]
	},
	favorite: function(state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	set_active: function(state, note) {
		state.activeNote = note
	}
}

export default new Vuex.Store({
	state,
	mutations
})
