import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlay, faStop);

Vue.component("font-awesome-icon", FontAwesomeIcon);
