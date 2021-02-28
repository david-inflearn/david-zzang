<!-- =========================================================================================
    File Name: DatepickerMonthViewOnly.vue
    Description: Create datepicker with only day view
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <vx-card title="Month View Only" code-toggler>
        <p>Rendering default DatePicker with Month view only</p>

        <div class="mt-5">
            <datepicker :minimumView="'month'" :maximumView="'month'"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :minimumView=&quot;'month'&quot; :maximumView=&quot;'month'&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  }
}
</script>
