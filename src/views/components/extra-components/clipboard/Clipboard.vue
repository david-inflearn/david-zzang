<!-- =========================================================================================
    File Name: Clipboard.vue
    Description: Clipboard demo
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <div id="page-clipboard-demo">
        <clipboard-directive></clipboard-directive>
        <clipboard-without-directive></clipboard-without-directive>
    </div>
</template>

<script>
import ClipboardDirective from './ClipboardDirective.vue'
import ClipboardWithoutDirective from './ClipboardWithoutDirective.vue'

export default{
  components: {
    ClipboardDirective,
    ClipboardWithoutDirective
  }
}
</script>
