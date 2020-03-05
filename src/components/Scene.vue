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
    onClick(event) {
      console.log(event);
      this.$router.push({ name: "Recorder", params: { id: this.num } });
    }
  }
};
</script>

<style lang="scss" scoped></style>
