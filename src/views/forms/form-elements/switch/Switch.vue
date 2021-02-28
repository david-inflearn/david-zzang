<!-- =========================================================================================
    File Name: Switch.vue
    Description: Switch element - Imports all page portion
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <div id="form-element-switch-demo">
        <switch-state></switch-state>
        <switch-color></switch-color>
        <switch-text></switch-text>
        <switch-icons></switch-icons>
        <switch-array-value></switch-array-value>
    </div>
</template>

<script>
import SwitchState from './SwitchState.vue'
import SwitchColor from './SwitchColor.vue'
import SwitchText from './SwitchText.vue'
import SwitchIcons from './SwitchIcons.vue'
import SwitchArrayValue from './SwitchArrayValue.vue'

export default{
  components: {
    SwitchState,
    SwitchColor,
    SwitchText,
    SwitchIcons,
    SwitchArrayValue
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/pages/switch.scss";
</style>
