<template>
  <div id="zoomBar">
    <span id="zoomPercent">100%</span>
    <input type="range" name="zoomSlider" id="zoomSlider" min="20" max="200" />
  </div>
</template>

<script>
export default {
  name: "ZoomBar"
};
</script>

<style lang="scss" scoped>
</style>