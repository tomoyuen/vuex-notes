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
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: mapGetters([
      'activeNote',
    ]),
    methods: mapActions([
      'addNote',
      'deleteNote',
      'favoriteNote',
    ]),
  }
</script>
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
