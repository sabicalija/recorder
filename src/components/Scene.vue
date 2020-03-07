<template>
  <div @click="onClick" id="scene">Scene {{ num }}</div>
</template>

<script>
export default {
  name: "Scene",
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$router.push({ name: "Recorder", params: { scene: this.num } });
    }
  }
};
</script>

<style lang="scss" scoped></style>
