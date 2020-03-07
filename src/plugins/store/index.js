import Vue from "vue";
import Vuex from "vuex";

import { v4 } from "uuid";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    records: [],
    recorder: {
      state: "deactive",
      timestamp: 0,
      track: [],
      scene: 0,
      input: {
        type: "",
        label: ""
      },
      mouse: {
        relX: 0,
        relY: 0,
        x: 0,
        y: 0,
        buttons: 0,
        timestamp: 0
      },
      keyboard: {
        input: "",
        timestamp: 0
      }
    }
  },
  mutations: {
    load(state, records) {
      state.records = JSON.parse(records);
    },
    save(state) {
      localStorage.setItem("recorder-records", JSON.stringify(state.records));
    },
    start(state, scene) {
      state.recorder.state = "active";
      state.recorder.timestamp = new Date();
      state.recorder.scene = scene;
      state.recorder.track = [];
    },
    stop(state) {
      state.recorder.state = "deactive";
      state.records.push({
        id: v4(),
        savedOn: new Date(),
        track: state.recorder.track,
        scene: state.recorder.scene,
        input: {
          type: state.recorder.input.type,
          label: state.recorder.input.label
        }
      });
    },
    record(state) {
      const entry = {
        timestamp: state.recorder.timestamp,
        mouse: {
          relX: state.recorder.mouse.relX,
          relY: state.recorder.mouse.relY,
          x: state.recorder.mouse.x,
          y: state.recorder.mouse.y,
          buttons: state.recorder.mouse.buttons,
          timestamp: state.recorder.mouse.timestamp
        },
        keyboard: {
          input: state.recorder.keyboard.input,
          timestamp: state.recorder.keyboard.timestamp
        }
      };
      state.recorder.track.push(entry);
    },
    updateMouse(state, { relX, relY, x, y, timestamp }) {
      state.recorder.mouse.relX = relX;
      state.recorder.mouse.relY = relY;
      state.recorder.mouse.x = x;
      state.recorder.mouse.y = y;
      state.recorder.mouse.timestamp = timestamp;
    },
    delete(state, id) {
      const idx = state.records.findIndex(e => e.id === id);
      state.records.splice(idx, 1);
    },
    type(state, input) {
      state.recorder.input.type = input.type;
      state.recorder.input.label = input.label;
    }
  },
  actions: {},
  modules: {}
});

export default store;
