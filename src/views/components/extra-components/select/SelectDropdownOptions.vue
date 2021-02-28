<!-- =========================================================================================
    File Name: SelectDropdownOptions.vue
    Description: Dropdown options in component
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <vx-card title="Dropdown Options">

        <p>vue-select accepts arrays of strings or objects to use as options through the <code>options</code> prop</p>
        <div class="mt-5">
            <dropdown-options-basic></dropdown-options-basic>
            <dropdown-options-option-labels></dropdown-options-option-labels>
        </div>
    </vx-card>
</template>

<script>
import DropdownOptionsBasic from './dropdown-options/DropdownOptionsBasic.vue'
import DropdownOptionsOptionLabels from './dropdown-options/DropdownOptionsOptionLabels.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    DropdownOptionsBasic,
    DropdownOptionsOptionLabels
  }
}
</script>
