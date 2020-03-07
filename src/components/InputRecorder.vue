<template>
  <div id="recorder">
    <canvas id="mouse"></canvas>
    <canvas id="keyboard"></canvas>
    <div id="control">
      <button
        @click="onStart"
        :disabled="recorder.status"
        :class="{ active: !recorder.status }"
        id="start"
      >
        <font-awesome-icon icon="play" />
        Start
      </button>
      <button
        @click="onStop"
        :disabled="!recorder.status"
        :class="{ active: recorder.status }"
        id="stop"
      >
        <font-awesome-icon icon="stop" />
        Stop
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputRecorder",
  data() {
    return {
      recorder: {
        status: false
      }
    };
  },
  methods: {
    onStart() {
      /* eslint-disable no-console */
      console.log("onStart");
      if (!this.recorder.status) {
        this.recorder.status = true;
      }
    },
    onStop() {
      /* eslint-disable no-console */
      console.log("onStop");
      if (this.recorder.status) {
        this.recorder.status = false;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
#recorder
  height 100%
  canvas
    width 100%
    background-color white
  canvas#keyboard
    height 5rem
#stop
  background-color lighten(red, 40%)

button:not(.active)
    background-color: gray !important
</style>
