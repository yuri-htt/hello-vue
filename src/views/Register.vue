<template>
  <div id="app">
    <h3>登録</h3>
    <label for="email">Email：</label>
    <input id="email" type="text" v-model="email" />

    <br />
    <br />

    <label for="password">Password：</label>
    <input id="password" type="text" v-model="password" />

    <br />
    <br />

    <button @click="register">送信</button>

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
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
    },
  },
};
</script>
