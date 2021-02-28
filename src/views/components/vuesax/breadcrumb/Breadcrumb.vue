<!-- =========================================================================================
    File Name: Breadcrumb.vue
    Description: Breadcrumb - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <div id="breadcrumb-demo">
        <breadcrumb-default></breadcrumb-default>
        <breadcrumb-color></breadcrumb-color>
        <breadcrumb-separator></breadcrumb-separator>
        <breadcrumb-slot></breadcrumb-slot>
        <breadcrumb-alignment></breadcrumb-alignment>
    </div>
</template>

<script>
import BreadcrumbDefault from './BreadcrumbDefault.vue'
import BreadcrumbColor from './BreadcrumbColor.vue'
import BreadcrumbSeparator from './BreadcrumbSeparator.vue'
import BreadcrumbSlot from './BreadcrumbSlot.vue'
import BreadcrumbAlignment from './BreadcrumbAlignment.vue'

export default{
  components: {
    BreadcrumbDefault,
    BreadcrumbColor,
    BreadcrumbSeparator,
    BreadcrumbSlot,
    BreadcrumbAlignment
  }
}
</script>
