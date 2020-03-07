<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: "InputRecorder",
  data() {
    return {
      label: "Start",
      recorderStatus: "disabled",
      input: null
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped></style>
