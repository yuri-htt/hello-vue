<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" type="text" v-model="name" />

    <br />
    <br />

    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>

    <br />
    <br />

    <button @click="createComment">送信</button>
  </div>
</template>

<script>
import axios from 'axios';
import './extensions';

export default {
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  methods: {
    createComment() {
      if (this.name.isBlank() || this.comment.isBlank()) {
        console.log('Toast: Blank!!');
        return;
      }

      axios
        .post(
          'https://firestore.googleapis.com/v1/projects/vuejs-http-sample/databases/(default)/documents/comments',
          {
            fields: {
              name: { stringValue: this.name },
              comment: { stringValue: this.comment },
            },
          },
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      this.name = '';
      this.comment = '';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
