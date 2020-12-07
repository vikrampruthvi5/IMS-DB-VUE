<template>
<v-card class="ma-3 pa-3">
  <div>
    <h3 class="headline mb-0" style="font-weight:bold">Part sales statistics</h3>
    <div>Quick view to list only imported parts.</div>
    <v-data-table
      :headers="headers"
      :items="suppItems"
      :items-per-page="5"
      class="elevation-8 mx-10 px-10 my-3"
      editable
    >
    </v-data-table>
  </div>
</v-card>
</template>

<script>
// import addPart from '@/components/partComponents/addPart'
export default {
  data() {
    return {
      // components: {addPart},
      select: null,
      suppItems: [],
      page: "part",
      dialog: false,
      desc: "View displays only the data ",
      query:
        "CREATE VIEW ImportedParts AS \
SELECT part.part_id , part.part_name, part.price, part.in_stock, part.imported_country, supplier.sup_name \
  FROM supplier \
LEFT OUTER JOIN supplied_by\
  ON supplier.sup_id = supplied_by.sup_id \
LEFT OUTER JOIN part \
  ON supplied_by.part_id = part.part_id \
 where part.imported_country is not null ;",
      headers: [
        {
          text: "Part Id",
          align: "start",
          value: "part_id",
        },
        { text: "Part name", value: "part_name" },
        { text: "Purchased", value: "purchased" },
        { text: "Sold", value: "sold" },
        { text: "Remaining", value: "remaining" },
      ],
      dataInfo: [],
    };
  },
  created() {
    this.fetchData();
    console.log(this.dataInfo);
  },
  methods: {
    async fetchData() {
      await fetch("/fetchView2")
        .then((response) => response.json())
        .then((data) => (this.suppItems = data.rows));
    },
  },
};
</script>
