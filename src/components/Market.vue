<template>
  <div class="col-3 text-center">
    <button class="btn btn-primary" @click="modalShow = true">Market Place</button>

    <transition name="fade" appear>
      <div v-if="modalShow == true" class="modal-overlay">
        <div class="container-fluid text-center">
          <div class="row">
            <img
              src="../assets/X-close.png"
              type="button"
              @click="modalShow = false"
              class="x-close d-flex align-items-center mt-1"
            />
            <div
              class="col-6 offset-3 p-3 text-dark d-flex justify-content-center align-items-center"
            >
              <img src="../assets/Sell.png" class="userResourceImage mx-2" />
              <h1>Market Place</h1>
              <img src="../assets/Sell.png" class="userResourceImage mx-2" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center text-dark">
              <h5>You can sell your resources here for 5gp each</h5>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-3">
              <img
                src="../assets/Food.png"
                alt="error loading image"
                class="userResourceImage mr-2"
              />
              <div class="row">
                <button
                  v-if="userInfo.food >= 1"
                  class="btn button-brown text-shadow-black text-white text-white col-12"
                  @click="sellResources('food',1)"
                  id="sellFood1"
                >Sell 1</button>
                <button
                  v-if="userInfo.food >= 5"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',5)"
                  id="sellFood5"
                >Sell 5</button>
                <button
                  v-if="userInfo.food >= 10"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',10)"
                  id="sellFood10"
                >Sell 10</button>
                <button
                  v-if="userInfo.food >= 50"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',50)"
                  id="sellFood50"
                >Sell 50</button>
                <button
                  v-if="userInfo.food >= 100"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',100)"
                  id="sellFood100"
                >Sell 100</button>
                <button
                  v-if="userInfo.food >= 1000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',1000)"
                  id="sellFood1000"
                >Sell 1000</button>
                <button
                  v-if="userInfo.food >= 10000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',10000)"
                  id="sellFood10000"
                >Sell 10K</button>
                <button
                  v-if="userInfo.food >= 100000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',100000)"
                  id="sellFood100000"
                >Sell 100k</button>
                <button
                  v-if="userInfo.food >= 1000000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('food',1000000)"
                  id="sellFood1000000"
                >Sell 1 million</button>
              </div>
            </div>
            <div class="col-3">
              <img src="../assets/Ore.png" alt="error loading image" class="userResourceImage mr-2" />
              <div class="row">
                <button
                  v-if="userInfo.ore >= 1"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',1)"
                  id="sellFood1"
                >Sell 1</button>
                <button
                  v-if="userInfo.ore >= 5"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',5)"
                  id="sellFood5"
                >Sell 5</button>
                <button
                  v-if="userInfo.ore >= 10"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',10)"
                  id="sellFood10"
                >Sell 10</button>
                <button
                  v-if="userInfo.ore >= 50"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',50)"
                  id="sellFood50"
                >Sell 50</button>
                <button
                  v-if="userInfo.ore >= 100"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',100)"
                  id="sellFood100"
                >Sell 100</button>
                <button
                  v-if="userInfo.ore >= 1000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',1000)"
                  id="sellFood1000"
                >Sell 1000</button>
                <button
                  v-if="userInfo.ore >= 10000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',10000)"
                  id="sellFood10000"
                >Sell 10K</button>
                <button
                  v-if="userInfo.ore >= 100000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',100000)"
                  id="sellFood100000"
                >Sell 100k</button>
                <button
                  v-if="userInfo.ore >= 1000000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('ore',1000000)"
                  id="sellFood1000000"
                >Sell 1 million</button>
              </div>
            </div>
            <div class="col-3">
              <img
                src="../assets/Wood.png"
                alt="error loading image"
                class="userResourceImage mr-2"
              />
              <div class="row">
                <button
                  v-if="userInfo.wood >= 1"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',1)"
                  id="sellFood1"
                >Sell 1</button>
                <button
                  v-if="userInfo.wood >= 5"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',5)"
                  id="sellFood5"
                >Sell 5</button>
                <button
                  v-if="userInfo.wood >= 10"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',10)"
                  id="sellFood10"
                >Sell 10</button>
                <button
                  v-if="userInfo.wood >= 50"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',50)"
                  id="sellFood50"
                >Sell 50</button>
                <button
                  v-if="userInfo.wood >= 100"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',100)"
                  id="sellFood100"
                >Sell 100</button>
                <button
                  v-if="userInfo.wood >= 1000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',1000)"
                  id="sellFood1000"
                >Sell 1000</button>
                <button
                  v-if="userInfo.wood >= 10000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',10000)"
                  id="sellFood10000"
                >Sell 10K</button>
                <button
                  v-if="userInfo.wood >= 100000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',100000)"
                  id="sellFood100000"
                >Sell 100k</button>
                <button
                  v-if="userInfo.wood >= 1000000"
                  class="btn button-brown text-shadow-black text-white col-12"
                  @click="sellResources('wood',1000000)"
                  id="sellFood1000000"
                >Sell 1 million</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Market",
  data() {
    return {
      modalShow: false
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  methods: {
    sellResources(resource, num) {
      let obj = {
        resource: resource,
        num: num
      };
      this.$store.dispatch("sell", obj);
    }
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
.btn-size {
  height: 50%;
}
button {
  margin: 2px;
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
</style>