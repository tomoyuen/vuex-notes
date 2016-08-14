<template>
	<div class="editor-wrapper">
		<div
			id="note-editor"
			@blur="editNote"
			v-html="activeNoteText"
			class="form-control">
		</div>
	</div>
</template>
<style>
.editor-wrapper {
	overflow: hidden;
	height: 100%;
	margin-left: 380px;
}

.editor-wrapper #note-editor {
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
	import { editNote } from '../vuex/actions';

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
