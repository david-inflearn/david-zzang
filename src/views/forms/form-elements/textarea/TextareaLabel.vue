<!-- =========================================================================================
    File Name: TextareaLabel.vue
    Description: Add lable to textarea
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <vx-card title="Label" code-toggler>

        <span>If you need to add a label you can use the label property</span>
        <div class="mt-5">
            <vs-textarea label="Label in Textarea" v-model="textarea" />
        </div>
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;vs-textarea label=&quot;Label in Textarea&quot; v-model=&quot;textarea&quot; /&gt;
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
