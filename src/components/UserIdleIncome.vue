<template>
  <div id="userIdle" class="row p-2 text-white text-shadow-black">
    <div class="col bg-secondary-trans">
      <div class="row">
        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img src="../assets/Gold.png" alt="error loading image" class="userResourceImage" />
            </div>
            <div class="col-12 col-md-7">
              <span id="gps"></span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img src="../assets/Food.png" alt="error loading image" class="userResourceImage" />
            </div>
            <div class="col-12 col-md-7">
              <span id="fps"></span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img src="../assets/Ore.png" alt="error loading image" class="userResourceImage" />
            </div>
            <div class="col-12 col-md-7">
              <span id="ops"></span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row text-center">
            <div class="col-12 col-md-5">
              <img src="../assets/Wood.png" alt="error loading image" class="userResourceImage" />
            </div>
            <div class="col-12 col-md-7">
              <span id="wps"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserIdleIncome"
};
</script>