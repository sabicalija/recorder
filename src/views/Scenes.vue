<template>
  <div id="scene-container">
    <Scene v-for="i of 3" :key="i" :num="i" />
  </div>
</template>

<script>
import Scene from "@/components/Scene.vue";
export default {
  name: "Scenes",
  components: {
    Scene
  }
};
</script>

<style lang="stylus" scoped></style>
