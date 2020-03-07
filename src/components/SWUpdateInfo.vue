<template>
  <div id="sw-update-info">
    <transition name="slide-fade">
      <router-link v-if="enabled" @click="reload" active-class="update" to="/">
        <font-awesome-icon icon="redo" />
      </router-link>
    </transition>
  </div>
</template>

<script>
import event from "@/utils/app/event.js";
export default {
  name: "SWUpdateInfo",
  data() {
    return {
      updateEvent: null,
      message: "Update available!"
    };
  },
  computed: {
    enabled() {
      return Boolean(this.updateEvent);
    }
  },
  methods: {
    onSWUpdate(e) {
      /* eslint-disable no-console */
      console.log("onSWUpdate");
      this.updateEvent = e;
    },
    reload() {
      if (this.updateEvent) {
        this.updateEvent.skipWaiting().then(() => {
          location.reload(true);
        });
        this.updateEvent = null;
      }
    },
    created() {
      /* eslint-disable no-console */
      console.log("created");
      event.$on("sw-updated", this.onSWUpdate);
    }
  }
};
</script>

<style lang="stylus" scoped>
.update
  background-color darken($secondary, 10%) !important
  padding 18px !important

#sw-update-info
  .slide-fade-enter-active
    transition all .5s ease
  .slide-fade-leave-active
    transition all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-to
    transform translateX(10px)
    opacity 0
  color white
</style>
