<!-- =========================================================================================
    File Name: TextareaDefault.vue
    Description: Rendering textarea
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <span>To add a Textarea we have the component <code>vs-textarea</code></span>

        <div class="mt-5">
            <vs-textarea v-model="textarea" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;vs-textarea v-model=&quot;textarea&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data:()=&gt;({
    textarea: &apos;&apos;,
  })
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
  data: () => ({
    textarea: ''
  })
}
</script>
