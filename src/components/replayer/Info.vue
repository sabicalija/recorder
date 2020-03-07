<template>
  <div id="info">
    <div id="id">
      <label for="record-id">ID</label>
      <span id="record-id">{{ record.id }}</span>
    </div>
    <div id="timestamp">
      <label for="record-timestamp">Created on</label>
      <span id="record-timestamp">{{ record.savedOn }}</span>
    </div>
    <div id="scene">
      <label for="record-scene">Scene</label>
      <span id="record-scene">{{ record.scene }}</span>
    </div>
    <div id="input">
      <label for="record-input">Input</label>
      <span id="record-input">{{ record.input.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  computed: {
    record() {
      return this.$store.state.records.find(e => e.id === this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
