<template>
  <div class="main">
    <input v-model="name" />
    <button @click="viewName()">view</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "david",
    array: [],
  }),
  methods: {
    viewName() {
      console.log(this.name);
    },
    fncName() {
      var _idx = 0;
      this.name = "David2";
    },
    fncName2() {
      var _idx2 = 0;
      this.name = "David3";
    },
  },
  mounted() {
    this.fncName2();
  },
};
</script>
<style>
.main {
  width: "100%";
}
</style>