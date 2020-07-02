<template>
  <div class="col-12 col-md-5">
    <div id="collect" class="row p-2 text-shadow-black">
      <div class="col d-flex justify-content-space-around">
        <button class="btn btn-primary text-shadow-black m-1" @click="collect('food')">
          <div class="row">
            <div class="col-5 mr-2">
              <img src="../assets/Food.png" alt="error loading image" class="img-sm mr-2" />
            </div>
            <div class="col-6">
              <div>Food</div>
              <div>+{{foodPer}}</div>
            </div>
          </div>
        </button>

        <button class="btn btn-primary text-shadow-black m-1" @click="collect('ore')">
          <div class="row">
            <div class="col-5 mr-2">
              <img src="../assets/Ore.png" alt="error loading image" class="img-sm mr-2" />
            </div>
            <div class="col-6">
              <div>Ore</div>
              <div>+{{orePer}}</div>
            </div>
          </div>
        </button>

        <button class="btn btn-primary text-shadow-black m-1" @click="collect('wood')">
          <div class="row">
            <div class="col-5 mr-2">
              <img src="../assets/Wood.png" alt="error loading image" class="img-sm mr-2" />
            </div>
            <div class="col-6">
              <div>Wood</div>
              <div>+{{woodPer}}</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClickResources",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    foodPer() {
      return this.$store.state.upgradeCounter.tool.arrow + 1;
    },
    orePer() {
      return this.$store.state.upgradeCounter.tool.pick + 1;
    },
    woodPer() {
      return this.$store.state.upgradeCounter.tool.axe + 1;
    }
  },
  methods: {
    collect(resource) {
      this.$store.dispatch("collect", resource);
    }
  }
};
</script>

<style scoped>
.num-float {
  position: absolute;
  left: 0;
  bottom: 0;
  transition: auto;
  transition-duration: 1s;
}
</style>