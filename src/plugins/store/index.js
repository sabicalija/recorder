import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    records: [],
    recorder: {
      state: "deactive",
      mouse: {
        x: 0,
        y: 0,
        timestamp: 0
      },
      keyboard: {
        input: "",
        timestamp: 0
      }
    }
  },
  mutations: {
    record(state, record) {
      state.records.push(record);
      localStorage.setItem("recorder-records", JSON.stringify(state.records));
    },
    load(state, records) {
      state.records = JSON.parse(records);
    },
    start(state) {
      state.recorder.state = "active";
    },
    stop(state) {
      state.recorder.state = "deactive";
    }
  },
  actions: {},
  modules: {}
});

export default store;
