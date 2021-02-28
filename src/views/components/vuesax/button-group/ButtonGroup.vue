<!-- =========================================================================================
  File Name: Button.vue
  Description: Buttons - Imports all page portions
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
    Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
  <div id="button-demo">
    <button-group-basic></button-group-basic>
    <button-group-toolbar></button-group-toolbar>
    <button-group-size></button-group-size>
    <button-group-vertical></button-group-vertical>
  </div>
</template>

<script>
import ButtonGroupBasic from './ButtonGroupBasic.vue'
import ButtonGroupToolbar from './ButtonGroupToolbar.vue'
import ButtonGroupSize from './ButtonGroupSize.vue'
import ButtonGroupVertical from './ButtonGroupVertical.vue'

export default {
  components: {
    ButtonGroupBasic,
    ButtonGroupToolbar,
    ButtonGroupSize,
    ButtonGroupVertical
  }
}

</script>
