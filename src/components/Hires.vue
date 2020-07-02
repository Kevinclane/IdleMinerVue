<template>
  <div class="col-3 text-center">
    <button class="btn btn-primary" @click="modalShow = true">Tavern</button>
    <transition name="fade" appear>
      <div v-if="modalShow == true" class="modal-overlay"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Hires",
  data() {
    return {
      modalShow: false
    };
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 10vh;
  left: 10vw;
  bottom: 10vh;
  right: 10vw;
  z-index: 100;
  border-radius: 20px;
  /* background-color: rgb(122, 130, 136, 0.95); */
  background-image: url("../assets/paper-landscape.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 80vh;
  overflow-y: auto;
}
.button-brown {
  background-image: url("../assets/dirt-brown.jpg");
}
.x-close {
  height: 3vh;
  position: absolute;
  top: 2px;
  right: 8px;
}
.round-cstm {
  border-radius: 5px;
}
</style>