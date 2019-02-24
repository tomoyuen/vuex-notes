<template>
  <div class="editor-wrapper">
    <div
      id="note-editor"
      @blur="editNote"
      v-html="activeNote.text"
      class="form-control">
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    methods: mapActions([
      'editNote'
    ]),
    computed: mapGetters([
      'activeNote'
    ]),
  }
</script>
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
