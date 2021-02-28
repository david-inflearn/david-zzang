<!-- =========================================================================================
    File Name: Divider.vue
    Description: Divider - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <div id="divider-demo">
        <divider-default></divider-default>
        <divider-text></divider-text>
        <divider-text-position></divider-text-position>
        <divider-color></divider-color>
        <divider-icon></divider-icon>
        <divider-style></divider-style>
    </div>
</template>

<script>
import DividerDefault from './DividerDefault.vue'
import DividerText from './DividerText.vue'
import DividerTextPosition from './DividerTextPosition.vue'
import DividerColor from './DividerColor.vue'
import DividerIcon from './DividerIcon.vue'
import DividerStyle from './DividerStyle.vue'

export default{
  components: {
    DividerDefault,
    DividerText,
    DividerTextPosition,
    DividerColor,
    DividerIcon,
    DividerStyle
  }
}
</script>
