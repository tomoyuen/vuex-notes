<template>
	<div id="note-editor">
		<textarea
			:value="activeNoteText"
			@input="editNote"
			class="form-control">
		</textarea>
	</div>
</template>
<style>
#note-editor {
	height: 100%;
	margin-left: 380px;
}

#note-editor textarea {
	height: 100%;
	border: 0;
	border-radius: 0;
}

#toolbar i {
	font-size: 30px;
	margin-bottom: 35px;
	cursor: pointer;
	opacity: 0.8;
	transition: opacity 0.5s ease;
}

#toolbar i:hover {
	opacity: 1;
}
</style>
<script>
	import {editNote} from '../vuex/actions'

	export default {
		vuex: {
			getters: {
				activeNoteText: state => state.activeNote.text
			},
			actions: {
				editNote
			}
		}
	}
</script>
