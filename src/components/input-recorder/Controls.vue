<template>
  <div id="control">
    <button id="start" @click="onStart" :class="{ active: !recording }" :disabled="recording">
      <font-awesome-icon icon="play" />
      Start
    </button>
    <button id="stop" @click="onStop" :class="{ active: recording }" :disabled="!recording">
      <font-awesome-icon icon="stop" />
      Stop
    </button>
  </div>
</template>

<script>
export default {
  name: "Controls",
  data() {
    return {
      recorder: {
        state: false
      }
    };
  },
  methods: {
    onStart() {
      if (!this.recorder.state) {
        this.recorder.state = true;
        this.$store.commit("start");
      }
    },
    onStop() {
      if (this.recorder.state) {
        this.recorder.state = false;
        this.$store.commit("stop");
      }
    }
  },
  computed: {
    recording() {
      return this.$store.state.recorder.state === "active";
    }
  }
};
</script>

<style lang="stylus" scoped></style>
