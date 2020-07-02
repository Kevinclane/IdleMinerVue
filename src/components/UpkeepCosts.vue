<template>
  <div class="row p-2 text-white text-shadow-black">
    <div class="col-12 col-md-3">
      <div class="row text-center justify-content-center bg-secondary-trans">
        <div class="col-12">
          <span id="workers"></span>
        </div>
        <div class="col-12">
          <span>Upkeep Costs</span>
        </div>
        <div class="row">
          <div class="col-6">
            <img src="../assets/Gold.png" alt="error loading image" class="userResourceImage" />
            <div id="workerGold"></div>
          </div>
          <div class="col-6">
            <img src="../assets/Food.png" alt="error loading image" class="userResourceImage" />
            <div id="workerFood"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpkeepCosts"
};
</script>