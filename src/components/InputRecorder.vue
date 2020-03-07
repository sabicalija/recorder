<template>
  <div id="recorder">
    <MouseCanvas />
    <KeyboardCanvas />
    <Controls />
  </div>
</template>

<script>
import MouseCanvas from "@/components/input-recorder/MouseCanvas.vue";
import KeyboardCanvas from "@/components/input-recorder/KeyboardCanvas.vue";
import Controls from "@/components/input-recorder/Controls.vue";
export default {
  name: "InputRecorder",
  components: { MouseCanvas, KeyboardCanvas, Controls }
};
</script>

<style lang="stylus" scoped></style>
