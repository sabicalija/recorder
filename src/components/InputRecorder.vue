<template>
  <div id="recorder">
    <canvas
      id="mouse"
      width="2000"
      height="1200"
      ref="mouseCanvas"
      @mousemove="onMouseMove"
    ></canvas>
    <canvas id="keyboard" width="2000" height="150" ref="keyboardCanvas"></canvas>
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
        status: false,
        timeout: 0,
        record: null
      },
      mouse: {
        x: 0,
        y: 0
      },
      keyboard: {
        input: ""
      }
    };
  },
  methods: {
    onStart() {
      /* eslint-disable no-console */
      console.log("onStart");
      if (!this.recorder.status) {
        this.initRecord();
      }
    },
    onStop() {
      /* eslint-disable no-console */
      console.log("onStop");
      if (this.recorder.status) {
        this.recorder.status = false;
      }
    },
    onMouseMove(event) {
      if (this.recorder.status) {
        const { clientX, clientY, offsetX, offsetY, pageX, pageY, screenX, screenY } = event;
        const { x, y } = this.$refs.mouseCanvas.getBoundingClientRect();
        this.mouse.x = clientX - x;
        this.mouse.y = clientY - y;
        console.log(`x: ${this.mouse.x}, y: ${this.mouse.y}`);
        console.log({ clientX, clientY, offsetX, offsetY, pageX, pageY, screenX, screenY });
      }
    },
    initRecord() {
      [0, 1000, 2000].forEach(delay => {
        setTimeout(() => {
          this.recorder.timeout = 3 - delay / 1000;
          this.clearCanvas();
          this.writeText(`${this.recorder.timeout}`);
        }, delay);
      });
      setTimeout(() => {
        this.clearCanvas();
        this.recorder.record = [];
        this.recorder.status = true;
        window.requestAnimationFrame(this.tick);
      }, 3000);
    },
    writeText(text) {
      const { width, height } = this.$refs.mouseCanvas;
      const ctx = this.$refs.mouseCanvas.getContext("2d");
      ctx.font = "100px Arial";
      ctx.textAlign = "center";
      ctx.fillText(text, width / 2, height / 2);
    },
    writePos(x, y) {
      const { width, height } = this.$refs.mouseCanvas;
      const ctx = this.$refs.mouseCanvas.getContext("2d");
      ctx.font = "100px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`(${x}/${y})`, width * 0.8, height * 0.15);
    },
    clearCanvas() {
      const { width, height } = this.$refs.mouseCanvas;
      const ctx = this.$refs.mouseCanvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);
    },
    drawCanvas() {
      this.clearCanvas();
      this.writePos(this.mouse.x, this.mouse.y);
    },
    tick() {
      if (this.recorder.status) {
        this.drawCanvas();
        window.requestAnimationFrame(this.tick);
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
    &:first-child
      margin-top 8px
#stop
  background-color lighten(red, 40%)

button:not(.active)
    background-color: gray !important
</style>
