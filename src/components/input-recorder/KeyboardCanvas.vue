<template>
  <div id="keyboard-canvas">
    <svg viewBox="0 0 400 30">
      <text>A</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "KeyboardCanvas",
  created() {
    const bodies = document.getElementsByTagName("body");
    const body = bodies[0];
    body.addEventListener("keydown", e => {
      /* eslint-disable no-console */
      console.log(e.key);
    });
    /* eslint-disable no-console */
    console.log(body);
  }
};
</script>

<style lang="stylus" scoped></style>
