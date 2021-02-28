<!-- =========================================================================================
  File Name: Textarea.vue
  Description: Add textarea using vs-textarea - Imports page portions
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
    Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
  <div id="form-element-textarea-demo">
    <textarea-default></textarea-default>
    <textarea-label></textarea-label>
    <textarea-counter></textarea-counter>
    <textarea-width></textarea-width>
    <textarea-height></textarea-height>
  </div>
</template>
<script>
import TextareaDefault from './TextareaDefault.vue'
import TextareaLabel from './TextareaLabel.vue'
import TextareaCounter from './TextareaCounter.vue'
import TextareaWidth from './TextareaWidth.vue'
import TextareaHeight from './TextareaHeight.vue'

export default {
  components: {
    TextareaDefault,
    TextareaLabel,
    TextareaCounter,
    TextareaWidth,
    TextareaHeight
  }
}

</script>

