<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
  import toolbar from './toolbar.vue'
  import NotesList from './notes-list.vue'
  import editor from './editor.vue'

  export default {
    components: {
      toolbar,
      NotesList,
      editor
    }
  }
</script>
