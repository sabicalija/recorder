import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    records: []
  },
  mutations: {
    "save-record": function(state, record) {
      if (record.name) {
        state.records.push(record);
      } else {
        state.records.push({ ...record, name: `file-${state.records.length + 1}` });
      }
      localStorage.setItem("input-recorder-records", JSON.stringify(state.records));
    },
    "restore-state": function(state, storage) {
      state.records = JSON.parse(storage);
    }
  },
  actions: {},
  modules: {}
});

export default store;
