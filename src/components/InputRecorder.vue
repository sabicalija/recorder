<template>
  <div>
    <canvas></canvas>
    <input :disabled="recorderStatus" type="text" v-model="input" />
    <button @click="onClick">{{ label }}</button>
    <button @click="onDownload">Download</button>
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
  methods: {
    onClick() {
      if (this.recorderStatus) {
        this.label = "Stop";
        this.recorderStatus = false;
      } else {
        this.$store.commit("save-record", {
          scene: this.$route.params.scene,
          record: this.input,
          time: new Date()
        });
        this.input = "";
        this.label = "Start";
        this.recorderStatus = true;
      }
    },
    onDownload() {
      // const url = window.URL.createObjectURL();
      const blob = new Blob([this.input], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "File-A.txt";
      link.click();
      URL.revokeObjectURL(link.href);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
