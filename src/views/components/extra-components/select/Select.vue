<!-- =========================================================================================
    File Name: Select.vue
    Description: Select element (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->

<template>
    <div id="extra-component-select-demo">
        <p class="mb-4"><a href="http://sagalbot.github.io/vue-select/" target="_blank" rel="nofollow">vue-select</a> is a native Vue.js select component that provides similar functionality to Select2. Read full documnetation <a href="http://sagalbot.github.io/vue-select/docs/" target="_blank" rel="nofollow">here</a></p>

        <select-dropdown-options></select-dropdown-options>
        <select-selecting-values></select-selecting-values>
    </div>
</template>

<script>
import SelectDropdownOptions from './SelectDropdownOptions.vue'
import SelectSelectingValues from './SelectSelectingValues.vue'

export default {
  components: {
    SelectDropdownOptions,
    SelectSelectingValues
  }
}
</script>
