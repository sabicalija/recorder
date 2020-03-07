<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/record">Record</router-link>
      <router-link to="/replay">Replay</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const records = localStorage.getItem("input-recorder-records");
    if (records) {
      this.$store.commit("restore-state", records);
    }
  }
};
</script>

<style lang="stylus"></style>
