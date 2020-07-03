<template>
  <div class="home">
    <header class="container-fluid text-shadow-black bg-primary">
      <div class="row p-1">
        <div class="col-12 col-md-5 d-flex justify-content-between">
          <span>
            <img src="../assets/Gold.png" alt="error loading image" class="userResourceImage" />
            {{user.gold}}
          </span>
          <span>
            <img src="../assets/Food.png" alt="error loading image" class="userResourceImage" />
            {{user.food}}
          </span>
          <span>
            <img src="../assets/Ore.png" alt="error loading image" class="userResourceImage" />
            {{user.ore}}
          </span>
          <span>
            <img src="../assets/Wood.png" alt="error loading image" class="userResourceImage" />
            {{user.wood}}
          </span>
        </div>
        <div class="col-12 my-2 my-md-0 col-md-3 offset-md-1 d-flex justify-content-between">
          <span>
            <img src="../assets/Food.png" alt="error loading image" class="userResourceImage" />
            {{idle.food}}/s
          </span>
          <span>
            <img src="../assets/Ore.png" alt="error loading image" class="userResourceImage" />
            {{idle.ore}}/s
          </span>
          <span>
            <img src="../assets/Wood.png" alt="error loading image" class="userResourceImage" />
            {{idle.wood}}/s
          </span>
        </div>
        <div class="col-12 col-md-2 offset-md-1 d-flex justify-content-around">
          <span>
            <img src="../assets/Gold.png" alt="error loading image" class="userResourceImage" />
            Upkeep
          </span>
          <span>
            <img src="../assets/Food.png" alt="error loading image" class="userResourceImage" />
            Upkeep
          </span>
        </div>
      </div>
    </header>

    <main class="container-fluid">
      <div class="row justify-content-center">
        <clickResources />
      </div>

      <div id="upgradesHiresSells" class="row d-flex justify-content-around buttonsBottom w-100">
        <upgrades />
        <market />
        <hires />
      </div>
    </main>

    <footer id="footer" class="container-fluid text-center bg-primary">
      <div class="row">
        <div class="col">
          <small class="text-white text-shadow-black">Created by Kevin Lane</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import clickResources from "@/components/ClickResources.vue";
import upgrades from "@/components/Upgrades.vue";
import market from "@/components/Market.vue";
import hires from "@/components/Hires.vue";

export default {
  name: "Home",
  computed: {
    user() {
      return this.$store.state.user;
    },
    idle() {
      return this.$store.state.upgradeCounter.idleIncome;
    }
  },
  components: {
    clickResources,
    upgrades,
    market,
    hires
  }
};
</script>

<style scoped>
</style>
