<template>
  <div id="replayer">
    <Info />
    <MouseCanvas />
    <KeyboardCanvas />
  </div>
</template>

<script>
import Info from "@/components/replayer/Info.vue";
import MouseCanvas from "@/components/replayer/MouseCanvas.vue";
import KeyboardCanvas from "@/components/replayer/KeyboardCanvas.vue";
export default {
  name: "Replayer",
  components: { Info, MouseCanvas, KeyboardCanvas }
};
</script>

<style lang="stylus" scoped></style>
