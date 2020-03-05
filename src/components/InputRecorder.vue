<template>
  <div>
    <canvas
      ref="canvas"
      v-on:mousedown="handleMouseDown"
      v-on:mouseup="handleMouseUp"
      v-on:mousemove="handleMouseMove"
      width="1000px"
      height="550px"
    >
    </canvas>
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

      input: null,
      mouse: {
        current: {
          x: 0,
          y: 0
        },
        down: false
      },
      recording: [
        {
          windowInnerHeight: window.innerHeight,
          windowInnerWidth: window.innerWidth
        }
      ]
    };
  },
  computed: {
    /*******************CANVAS CODE**************  */

    currentMouse: function() {
      // rect is a DOMRect(rectangle) object with eight properties:
      // left, top, right, bottom, x, y, width, height
      const rect = this.$refs.canvas.getBoundingClientRect(); //Assert that c is non-null and access getBoundingClientRect()
      return {
        x: this.mouse.current.x - rect.left,
        y: this.mouse.current.y - rect.top
      };
    }
    /*******************END CANVAS CODE**************  */
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
    },
    /*******************CANVAS CODE**************  */

    draw() {
      if (this.mouse.down) {
        const c = this.$refs.canvas;
        const ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    },
    handleMouseDown(event) {
      this.mouse.down = true;
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      };
      const c = this.$refs.canvas;
      const ctx = c.getContext("2d");

      ctx.moveTo(this.currentMouse.x, this.currentMouse.y);
    },
    handleMouseUp() {
      this.mouse.down = false;
    },
    handleMouseMove(event) {
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY,
        z: Date.now()
      };
      if (!this.recorderStatus && this.mouse.down) {
        this.recording.push({
          x: this.mouse.current.x,
          y: this.mouse.current.y - 60,
          time: this.mouse.current.z
        });
        this.draw(event);
      }
    }
  }
  /*******************END CANVAS CODE**************  */
};
</script>

<style lang="stylus" scoped>
canvas {
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
