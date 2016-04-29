<template>
	<div id="toolbar">
		<i @click="addNote" class="glyphicon glyphicon-plus"></i>
		<i @click="favoriteNote"
			class="glyphicon glyphicon-star"
			:class="{starred: activeNote.favorite}"></i>
		<i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	</div>
</template>

<script>
	import {addNote, deleteNote, favoriteNote} from '../vuex/actions'

	export default {
		vuex: {
			getters: {
				activeNote: state => state.activeNote
			},
			actions: {
				addNote,
				deleteNote,
				favoriteNote
			}
		}
	}
</script>
