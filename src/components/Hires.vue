<template>
  <div class="col-3 text-center">
    <button class="btn btn-primary" @click="modalShow = true">Tavern</button>
    <transition name="fade" appear>
      <div v-if="modalShow == true" class="modal-overlay">
        <div class="containter-fluid text-center">
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
              <img src="../assets/Tavern.png" alt="error loading image" class="img-sm mx-2" />
              <h1>Tavern</h1>
              <img
                src="../assets/Tavern.png"
                alt="error loading image"
                class="img-sm img-flip-x mx-2"
              />
            </div>
          </div>
          <div class="row d-flex justify-content-around text-white">
            <div class="col-8 col-md-3 m-3 button-brown p-2 round-cstm mn-vh-50 mx-4">
              <div>
                <img src="../assets/Hunter.png" alt="error loading image" class="img-md" />
                <p>Hunter</p>
                <p>Increases food collection by +1 per second</p>
              </div>
              <div v-if="user.gold >= hunterCost">Gold: {{hunterCost}}</div>
              <div v-else class="text-red">Gold: {{hunterCost}}</div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="user.gold >= hunterCost"
                    @click="hire('hunter')"
                    class="btn btn-primary text-shadow-black my-2"
                  >Hire Hunter</button>
                </div>
              </div>
            </div>
            <div class="col-8 col-md-3 m-3 button-brown p-2 round-cstm mn-vh-50 mx-4">
              <div>
                <img src="../assets/Miner.png" alt="error loading image" class="img-md" />
                <p>Miner</p>
                <p>Increases ore collection by +1 per second</p>
              </div>
              <div v-if="user.gold >= hunterCost">Gold: {{minerCost}}</div>
              <div v-else class="text-red">Gold: {{minerCost}}</div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="user.gold >= hunterCost"
                    @click="hire('miner')"
                    class="btn btn-primary text-shadow-black my-2"
                  >Hire Miner</button>
                </div>
              </div>
            </div>
            <div class="col-8 col-md-3 m-3 button-brown p-2 round-cstm mn-vh-50 mx-4">
              <div>
                <img src="../assets/Lumberjack.png" alt="error loading imgage" class="img-md" />
                <p>Lumberjack</p>
                <p>Increases wood collection by +1 per second</p>
              </div>
              <div v-if="user.gold >= hunterCost">Gold: {{lumberjackCost}}</div>
              <div v-else class="text-red">Gold: {{lumberjackCost}}</div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="user.gold >= hunterCost"
                    @click="hire('lumberjack')"
                    class="btn btn-primary text-shadow-black my-2"
                  >Hire Lumberjack</button>
                </div>
              </div>
            </div>
            <div class="col-8 col-md-3 m-3 button-brown p-2 round-cstm mn-vh-50 mx-4">
              <div>
                <img src="../assets/Trader.png" alt="error loading imgage" class="img-md" />
                <p>Trader</p>
                <p>Increases gold received for selling resources by +10%</p>
              </div>
              <div v-if="user.gold >= traderCost">Gold: {{traderCost}}</div>
              <div v-else class="text-red">Gold: {{traderCost}}</div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="user.gold >= traderCost"
                    @click="hire('trader')"
                    class="btn btn-primary text-shadow-black my-2"
                  >Hire Trader</button>
                </div>
              </div>
            </div>
            <div class="col-8 col-md-3 m-3 button-brown p-2 round-cstm mn-vh-50 mx-4">
              <div>
                <img src="../assets/Builder.png" alt="error loading imgage" class="img-md" />
                <p>Builder</p>
                <p>Reduces building timers by 5%</p>
              </div>
              <div v-if="user.gold >= builderCost">Gold: {{builderCost}}</div>
              <div v-else class="text-red">Gold: {{builderCost}}</div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="user.gold >= builderCost"
                    @click="hire('builder')"
                    class="btn btn-primary text-shadow-black my-2"
                  >Hire Builder</button>
                </div>
              </div>
            </div>
            <div class="col-8 col-md-3 m-3 button-brown p-2 round-cstm mn-vh-50 mx-4">
              <div>
                <img src="../assets/Blacksmith.png" alt="error loading imgage" class="img-md" />
                <p>Blacksmith</p>
                <p>Reduces item upgrade timers by 5%</p>
              </div>
              <div v-if="user.gold >= blacksmithCost">Gold: {{blacksmithCost}}</div>
              <div v-else class="text-red">Gold: {{blacksmithCost}}</div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="user.gold >= blacksmithCost"
                    @click="hire('blacksmith')"
                    class="btn btn-primary text-shadow-black my-2"
                  >Hire Blacksmith</button>
                </div>
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
  name: "Hires",
  data() {
    return {
      modalShow: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    hunterCost() {
      return this.$store.state.costs.hunter;
    },
    minerCost() {
      return this.$store.state.costs.miner;
    },
    lumberjackCost() {
      return this.$store.state.costs.lumberjack;
    },
    traderCost() {
      return this.$store.state.costs.trader;
    },
    builderCost() {
      return this.$store.state.costs.builder;
    },
    blacksmithCost() {
      return this.$store.state.costs.blacksmith;
    }
  },
  methods: {
    hire(worker) {
      this.$store.dispatch("hire", worker);
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
  overflow-x: hidden;
}
.button-brown {
  background-image: url("../assets/dirt-brown.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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