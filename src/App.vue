<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
</style>
<style>
/* @media screen and (max-width: 768px) {
  #upgradesHiresSells {
    position: relative;
    bottom: auto;
  }
  #footer {
    bottom: auto;
  }
} */

body {
  overflow-y: hidden;
}

main {
  flex-grow: 1;
}

.userResourceImage {
  max-height: 3vh;
}
.img-md {
  max-height: 8vh;
}
.img-sm {
  height: 5vh;
}
.img-flip-x {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

body {
  background: url(./assets/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Gloria Hallelujah", cursive;
  margin: 0 auto;
  overflow-x: hidden;
  user-select: none;
}

footer {
  position: absolute;
  bottom: 0;
}

button {
  filter: drop-shadow(2px 4px 6px black);
}

img {
  filter: drop-shadow(2px 4px 6px black);
}

.buttonsBottom {
  position: absolute;
  bottom: 3%;
  left: 0;
  right: 0;
}

.mxw-100vw {
  max-width: 100%;
}

.mn-vh-35 {
  min-height: 35vh;
}

/* div {
  border: 1px solid red;
} */

.text-shadow-black {
  text-shadow: 2px 2px 2px black;
}

.text-black {
  color: black;
}

.text-red {
  -webkit-text-fill-color: red;
}

.text-white {
  -webkit-text-fill-color: white;
}

.bg-secondary-trans {
  background-color: rgb(122, 130, 136, 0.7);
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  box-shadow: 1px 1px black;
}

.justify-content-space-around {
  justify-content: space-evenly;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-flex-end {
  justify-content: flex-end;
}

.align-center {
  align-items: center;
}

button {
  text-shadow: 2px 2px 2px black;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #272525;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #765737;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #906a44;
}
</style>