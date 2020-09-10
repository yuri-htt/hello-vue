<template>
  <div id="app">
    <h3>ログイン</h3>
    <label for="email">Email：</label>
    <input id="email" type="text" v-model="email" />

    <br />
    <br />

    <label for="password">Password：</label>
    <input id="password" type="text" v-model="password" />

    <br />
    <br />

    <button @click="login">送信</button>

  </div>
</template>

<script>
import '../extensions';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
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
