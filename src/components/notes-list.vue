<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
      <div class="h3">
        <input class="form-control" type="text" v-model="query" placeholder="Filter your notes...">
      </div>
    </div>
    <div class="container">
      <div class="list-group">
        <a v-for="(note, key) in filteredByTypeNotes"
          class="list-group-item"
          :key="key"
          :class="{active: activeKey === key}"
          @click="updateNote(key, note)">
          <h4 class="list-group-item-heading">{{note.text}}</h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        show: 'all',
        query: ''
      };
    },
    methods: mapActions([
      'updateNote',
    ]),
    computed: {
      ...mapGetters([
        'notes',
        'activeNote',
        'activeKey'
      ]),
      filteredByTypeNotes() {
        var favoriteNotes = {}
        if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favorites') {
          for (var note in this.notes) {
            if (this.notes[note]['favorite']) {
              favoriteNotes[note] = this.notes[note]
            }
          }
          return favoriteNotes
        }
      },
      filteredByContentNotes() {
        var filteredNotes = {}
        for (let note in this.filteredByTypeNotes) {
          if (this.filteredByTypeNotes[note]['text'].indexOf(this.query) > -1) {
            filteredNotes[note] = this.filteredByTypeNotes[note]
          }
        }
        return filteredNotes
      }
    },
  }
</script>
<style>
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #f5f5f5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#list-header {
  padding: 5px 25px 25px 25px;
}

#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

#notes-list .container {
  height: calc(100% - 190px);
  max-height: calc(100% - 190px);
  overflow: auto;
  width: 100%;
  padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}

.list-group-item-heading {
  font-weight: 300;
  font-size: 15px;
}
.btn-group .btn:hover,
.btn-group .btn.active {
  outline: none;
}
.list-group .list-group-item.active {
  background-color: #1abf89;
}
</style>
