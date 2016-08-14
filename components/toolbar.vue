<template>
	<div id="toolbar">
		<i @click="addNote" class="glyphicon glyphicon-plus"></i>
		<i @click="favoriteNote"
			class="glyphicon glyphicon-star"
			:class="{starred: activeNote.favorite}"></i>
		<i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	</div>
</template>
<style>
#toolbar {
	float: left;
	width: 80px;
	height: 100%;
	background-color: #21a28b;
	color: #fff;
	padding: 35px 25px 25px 25px;
}

.starred {
	color: #f7ae4f;
}
</style>
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
