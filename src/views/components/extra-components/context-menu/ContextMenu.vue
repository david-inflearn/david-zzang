<!-- =========================================================================================
  File Name: ContextMenu.vue
  Description: Context menu Demo
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->

<template>
  <div id="context-menu-demo">
    <context-menu-simple />
    <context-menu-click-not-close />
  </div>
</template>

<script>
import ContextMenuSimple from './ContextMenuSimple.vue'
import ContextMenuClickNotClose from './ContextMenuClickNotClose.vue'

export default{
  components: {
    ContextMenuSimple,
    ContextMenuClickNotClose
  }
}
</script>
