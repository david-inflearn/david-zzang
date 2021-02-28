<!-- =========================================================================================
    File Name: DatePickerDefault.vue
    Description: A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations
    ----------------------------------------------------------------------------------------
    Item Name: Education Template
    Author: David
    Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        <p>Rendering default DatePicker with <code>v-model</code></p>

        <div class="mt-5">
            <datepicker placeholder="Select Date" v-model="date"></datepicker>
            <p class="mt-4">Selected Date: {{ date }}</p>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker placeholder=&quot;Select Date&quot; v-model=&quot;date&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';

export default {
  data() {
    return {
      date: null,
    }
  },
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
  data () {
    return {
      date: null
    }
  },
  components: {
    Datepicker
  }
}
</script>
