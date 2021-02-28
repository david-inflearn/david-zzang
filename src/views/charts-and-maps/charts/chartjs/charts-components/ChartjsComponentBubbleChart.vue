<!-- =========================================================================================
  File Name: ChartjsComponentBubbleChart.vue
  Description: Chartjs component - Bubble Chart
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
========================================================================================== -->

<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  props: {
    data: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
