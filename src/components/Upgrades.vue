<template>
  <div class="col-3 text-center">
    <button class="btn btn-primary" @click="modalShow = true">Blacksmith Shop</button>
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
              <img src="../assets/anvil.png" class="userResourceImage mx-2" />
              <h1>Blacksmith Lv 1</h1>
              <img src="../assets/anvil.png" class="userResourceImage mx-2" />
            </div>
          </div>
          <div class="row d-flex justify-content-around text-white">
            <div class="col-8 col-md-2 m-3 button-brown p-2 round-cstm">
              <div>
                <img
                  :src="require('../assets/' + nextUpgrade.arrow.img + '.png')"
                  alt="error loading image"
                  class="img-md"
                />
                <p>{{nextUpgrade.arrow.name}}</p>
              </div>
              <div>
                Gold: {{arrowCost.gold}}
                Ore: {{arrowCost.ore}}
                Wood: {{arrowCost.wood}}
              </div>
              <div>
                <button
                  class="btn btn-primary text-shadow-black my-2"
                  @click="upgrade('arrow')"
                >Purchase Upgrade</button>
              </div>
            </div>
            <div class="col-8 col-md-2 m-3 button-brown p-2 round-cstm">
              <div>
                <img
                  :src="require('../assets/' + nextUpgrade.pick.img + '.png')"
                  alt="error loading image"
                  class="img-md"
                />
                <p>{{nextUpgrade.pick.name}}</p>
              </div>
              <div>
                Gold: {{pickCost.gold}}
                Ore: {{pickCost.ore}}
                Wood: {{pickCost.wood}}
              </div>
              <button
                class="btn bg-primary text-shadow-black my-2"
                @click="upgrade('pick')"
              >Purchase Upgrade</button>
            </div>
            <div class="col-8 col-md-2 m-3 button-brown p-2 round-cstm">
              <div>
                <img
                  :src="require('../assets/' + nextUpgrade.axe.img + '.png')"
                  alt="error loading image"
                  class="img-md"
                />
                <p>{{nextUpgrade.axe.name}}</p>
              </div>
              <div>
                Gold: {{axeCost.gold}}
                Ore: {{axeCost.ore}}
                Wood: {{axeCost.wood}}
              </div>
              <div>
                <button
                  class="btn btn-primary text-shadow-black my-2"
                  @click="upgrade('axe')"
                >Purchase Upgrade</button>
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
  name: "Upgrades",
  data() {
    return {
      modalShow: false
    };
  },
  mounted() {},
  computed: {
    arrowCost() {
      return this.$store.state.costs.arrow;
    },
    pickCost() {
      return this.$store.state.costs.pick;
    },
    axeCost() {
      return this.$store.state.costs.axe;
    },
    upgradeCounter() {
      return this.$store.state.upgradeCounter.tool;
    },
    nextUpgrade() {
      return this.$store.state.nextUpgrade;
    },
    arrowImage() {
      return this.nextUpgrade.arrow.img;
    }
  },
  methods: {
    upgrade(name) {
      this.$store.dispatch("upgrade", name);
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 10%;
  left: 10%;
  bottom: 10%;
  right: 10%;
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