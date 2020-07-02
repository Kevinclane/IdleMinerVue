<template>
  <div id="userResources" class="row p-2 text-white text-shadow-black">
    <div class="col bg-secondary-trans">
      <div class="row">
        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img
                src="../assets/Gold.png"
                alt="error loading image"
                class="userResourceImage mr-2"
              />
            </div>
            <div class="col-12 col-md-7 d-flex align-center">
              <span id="userGold">{{user.gold}}</span>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img
                src="../assets/Food.png"
                alt="error loading image"
                class="userResourceImage mr-2"
              />
            </div>
            <div class="col-12 col-md-7 d-flex align-center">
              <span id="userFood">{{user.food}}</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img src="../assets/Ore.png" alt="error loading image" class="userResourceImage mr-2" />
            </div>
            <div class="col-12 col-md-7 d-flex align-center">
              <span id="userOre">{{user.ore}}</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img
                src="../assets/Wood.png"
                alt="error loading image"
                class="userResourceImage mr-2"
              />
            </div>
            <div class="col-12 col-md-7 d-flex align-center">
              <span id="userWood">{{user.wood}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserResources",
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>