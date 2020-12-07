<template>
  <v-layout justify-center>
    <v-flex v-for="(item, index) in items" :key="index">
      <v-card class="elevation-10 mx-4">
        <v-container fluid fill-height>
          <v-toolbar dark color="">
            <v-toolbar-title>{{item.message}}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            I love the world.
            <DataTable />
          </v-card-text>
        </v-container>
      </v-card>
    </v-flex>
    <DataTable />
  </v-layout>

</template>

<script>
import CustomersData from '@/components/CustomersData.vue'

export default {
  data() {
    return {
      components: {
        CustomersData,
      },
      items: [
        {message: "Customers"},
        {message: "Suppliers"},
        {message: "Parts"},
      ]
    }
  },
}
</script>
