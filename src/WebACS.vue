<template>
  <div>
    <KeyboardNavigation />
    <ToolBar />
    <ModelEditor />
    <PropertyEditor />
    <footer id="statusAndZoomBar">
      <StatusBar />
      <ZoomBar />
    </footer>
  </div>
</template>

<script>
import KeyboardNavigation from "./components/navigation/KeyboardNavigation.vue";
import ModelEditor from "./components/editors/model/ModelEditor.vue";
import PropertyEditor from "./components/editors/property/PropertyEditor.vue";
import ToolBar from "./components/toolbars/ToolBar.vue";
import StatusBar from "./components/toolbars/StatusBar.vue";
import ZoomBar from "./components/toolbars/ZoomBar.vue";

import WebACS from "./webACS.js";

export default {
  name: "WebACS",
  components: {
    KeyboardNavigation,
    ModelEditor,
    PropertyEditor,
    ToolBar,
    StatusBar,
    ZoomBar
  },
  data() {
    return {};
  },
  mounted() {
    WebACS();
  }
};
</script>

<style lang="scss" scoped>
</style>