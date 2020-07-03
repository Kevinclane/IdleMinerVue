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
              <img src="../assets/anvil.png" class="img-sm img-flip-x mx-2" />
              <h1>Blacksmith Lv {{blacksmith}}</h1>
              <img src="../assets/anvil.png" class="img-sm mx-2" />
            </div>
          </div>
          <div class="row d-flex justify-content-around text-white">
            <div class="col-8 col-md-2 m-3 button-brown p-2 round-cstm mn-vh-35">
              <div>
                <img
                  :src="require('../assets/' + nextUpgrade.arrow.img + '.png')"
                  alt="error loading image"
                  class="img-md"
                />
                <p>{{nextUpgrade.arrow.name}}</p>
              </div>
              <div>
                <div v-if="user.gold >= arrowCost.gold">Gold: {{arrowCost.gold}}</div>
                <div v-else class="text-red">Gold: {{arrowCost.gold}}</div>
                <div v-if="user.ore >= arrowCost.ore">Ore: {{arrowCost.ore}}</div>
                <div v-else class="text-red">Ore: {{arrowCost.ore}}</div>
                <div v-if="user.wood >= arrowCost.wood">Wood: {{arrowCost.wood}}</div>
                <div v-else class="text-red">Wood: {{arrowCost.wood}}</div>
              </div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="canUpgradeArrow == true"
                    class="btn btn-primary text-shadow-black my-2"
                    @click="upgrade('arrow')"
                  >Purchase Upgrade</button>
                </div>
              </div>
            </div>
            <div class="col-8 col-md-2 m-3 button-brown p-2 round-cstm mn-vh-35">
              <div>
                <img
                  :src="require('../assets/' + nextUpgrade.pick.img + '.png')"
                  alt="error loading image"
                  class="img-md"
                />
                <p>{{nextUpgrade.pick.name}}</p>
              </div>
              <div>
                <div v-if="user.gold >= pickCost.gold">Gold: {{pickCost.gold}}</div>
                <div v-else class="text-red">Gold: {{pickCost.gold}}</div>
                <div v-if="user.ore >= pickCost.ore">Ore: {{pickCost.ore}}</div>
                <div v-else class="text-red">Ore: {{pickCost.ore}}</div>
                <div v-if="user.wood >= pickCost.wood">Wood: {{pickCost.wood}}</div>
                <div v-else class="text-red">Wood: {{pickCost.wood}}</div>
              </div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="canUpgradePick == true"
                    class="btn bg-primary text-shadow-black my-2"
                    @click="upgrade('pick')"
                  >Purchase Upgrade</button>
                </div>
              </div>
            </div>
            <div class="col-8 col-md-2 m-3 button-brown p-2 round-cstm mn-vh-35">
              <div>
                <img
                  :src="require('../assets/' + nextUpgrade.axe.img + '.png')"
                  alt="error loading image"
                  class="img-md"
                />
                <p>{{nextUpgrade.axe.name}}</p>
              </div>
              <div>
                <div v-if="user.gold >= axeCost.gold">Gold: {{axeCost.gold}}</div>
                <div v-else class="text-red">Gold: {{axeCost.gold}}</div>
                <div v-if="user.ore >= axeCost.ore">Ore: {{axeCost.ore}}</div>
                <div v-else class="text-red">Ore: {{axeCost.ore}}</div>
                <div v-if="user.wood >= axeCost.wood">Wood: {{axeCost.wood}}</div>
                <div v-else class="text-red">Wood: {{axeCost.wood}}</div>
              </div>
              <div class="row buttonsBottom">
                <div class="col">
                  <button
                    v-if="canUpgradeAxe == true"
                    class="btn btn-primary text-shadow-black my-2"
                    @click="upgrade('axe')"
                  >Purchase Upgrade</button>
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
  name: "Upgrades",
  data() {
    return {
      modalShow: false
    };
  },
  mounted() {},
  computed: {
    user() {
      return this.$store.state.user;
    },
    arrowCost() {
      return this.$store.state.costs.arrow;
    },
    pickCost() {
      return this.$store.state.costs.pick;
    },
    axeCost() {
      return this.$store.state.costs.axe;
    },
    canUpgradeArrow() {
      if (
        this.user.gold >= this.arrowCost.gold &&
        this.user.ore >= this.arrowCost.ore &&
        this.user.wood >= this.arrowCost.wood
      ) {
        return true;
      } else return false;
    },
    canUpgradePick() {
      if (
        this.user.gold >= this.pickCost.gold &&
        this.user.ore >= this.pickCost.ore &&
        this.user.wood >= this.pickCost.wood
      ) {
        return true;
      } else return false;
    },
    canUpgradeAxe() {
      if (
        this.user.gold >= this.axeCost.gold &&
        this.user.ore >= this.axeCost.ore &&
        this.user.wood >= this.axeCost.wood
      ) {
        return true;
      } else return false;
    },
    upgradeCounter() {
      return this.$store.state.upgradeCounter.tool;
    },
    nextUpgrade() {
      return this.$store.state.nextUpgrade;
    },
    arrowImage() {
      return this.nextUpgrade.arrow.img;
    },
    blacksmith() {
      return this.$store.state.upgradeCounter.blacksmith;
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