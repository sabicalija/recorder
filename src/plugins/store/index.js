import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    records: [],
    recorder: {
      state: "deactive",
      timestamp: 0,
      recording: [],
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
    // record(state, record) {
    //   state.records.push(record);
    //   localStorage.setItem("recorder-records", JSON.stringify(state.records));
    // },
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
      state.recorder.recording.push(entry);
    },
    updateMouse(state, { relX, relY, x, y, timestamp }) {
      state.recorder.mouse.relX = relX;
      state.recorder.mouse.relY = relY;
      state.recorder.mouse.x = x;
      state.recorder.mouse.y = y;
      state.recorder.mouse.timestamp = timestamp;
    },
    load(state, records) {
      state.records = JSON.parse(records);
    },
    start(state) {
      state.recorder.state = "active";
      state.recorder.timestamp = new Date();
      state.recorder.recording = [];
    },
    stop(state) {
      state.recorder.state = "deactive";
      state.records.push({ savedOn: new Date(), track: state.recorder.recording });
      localStorage.setItem("recorder-records", JSON.stringify(state.records));
    }
  },
  actions: {},
  modules: {}
});

export default store;
