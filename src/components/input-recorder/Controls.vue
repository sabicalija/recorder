<template>
  <div id="control">
    <div id="main">
      <button id="start" @click="onStart" :class="{ active: !recording }" :disabled="recording">
        <font-awesome-icon icon="play" />
        Start
      </button>
      <button id="stop" @click="onStop" :class="{ active: recording }" :disabled="!recording">
        <font-awesome-icon icon="stop" />
        Stop
      </button>
    </div>
    <div id="input-selection">
      <select id="input-selection-dropdown" v-model="selection">
        <option v-for="input of inputs" :key="input.type" :value="input.type">{{
          input.label
        }}</option>
      </select>
      <div id="icon">
        <font-awesome-icon rotation="90" icon="play" />
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/utils/app/event.js";
import { mapState } from "vuex";
export default {
  name: "Controls",
  data() {
    return {
      inputs: [
        { type: "mouse", label: "Mouse & Keyboard" },
        { type: "flipmouse", label: "Flip Mouse & Keyboard" },
        { type: "camera", label: "Camera Mouse & Keyboard" },
        { type: "eyetracker", label: "EyeTracking Mouse & Keyboard" }
      ]
    };
  },
  methods: {
    onStart() {
      if (this.recorder.state === "deactive") {
        this.$store.commit("start", this.$route.params.scene);
        eventBus.$emit("start-recording");
      }
    },
    onStop() {
      if (this.recorder.state === "active") {
        this.$store.commit("stop");
        this.$store.commit("save");
        eventBus.$emit("stop-recording");
      }
    }
  },
  computed: {
    ...mapState(["recorder"]),
    recording() {
      return this.recorder.state === "active";
    },
    selection: {
      get() {
        return this.$store.state.recorder.input.type;
      },
      set(value) {
        this.$store.commit(
          "type",
          this.inputs.find(e => e.type === value)
        );
      }
    }
  },
  mounted() {
    this.$store.commit("type", this.inputs[0]);
  }
};
</script>

<style lang="stylus" scoped>
#icon
  position relative
  top 1.4rem
  right 2rem
  width 0
  color white
  pointer-events none
</style>
