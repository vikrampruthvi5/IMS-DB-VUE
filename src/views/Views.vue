<template>
  <div class="View">
      <View1 />
      <View2 />
      <View3 />
      <View4 />
      <h3>Sales statistics</h3>
      <vue-bar-graph
  :points=[5604180.00030518,107301]
  :show-y-axis="true"
  :show-x-axis="true"
  :width="1000"
  :height="500"
  :show-values="true"
  :use-custom-labels="true"
  :labels="['Purchased', 'Sold']"
  />
      <View6 />
  </div>
</template>

<script>
import View1 from "@/components/Views/View1.vue"
import View2 from "@/components/Views/View2.vue"
import View3 from "@/components/Views/View3.vue"
import View4 from "@/components/Views/View4.vue"
// import View5 from "@/components/Views/View5.vue"
import View6 from "@/components/Views/View6.vue"
import VueBarGraph from 'vue-bar-graph';

export default {
  components: {View1, View2, View3, View4, VueBarGraph, View6}
}
</script>