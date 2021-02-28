<!-- =========================================================================================
    File Name: NumberInput.vue
    Description: Rendering number input with label
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <vx-card title="Label" code-toggler>

        <p>Number Input supports adding labels for number inputs.</p>

        <div class="demo-alignment">
            <vs-input-number v-model="passengers" label="passengers:"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number v-model=&quot;passengers&quot; label=&quot;passengers:&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      passengers:1,
    }
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      passengers: 1
    }
  }
}
</script>
