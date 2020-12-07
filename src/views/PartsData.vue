<template>
  <div>
    <div class="text-right mr-10">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue white--text" dark v-bind="attrs" v-on="on">
            Add new {{ page }}
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2">
            New {{ page }}
          </v-card-title>

          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field label="Part ID"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field label="Part Name"></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="Price"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field label="Stock"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Imported Country"></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="Price"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="6">
                  <v-select
                    label="Supplier"
                    :items="suppItems"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions justify-center align-center>
            <v-btn color="green lighten-0.5 white--text" @click="dialog = false">
              Add {{ page }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-data-table
      :headers="headers"
      :items="dataInfo"
      :items-per-page="10"
      class="elevation-8 mx-10 px-10 my-3"
      editable
    >
    </v-data-table>
  </div>
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
      query:
        "SELECT part.part_id , part.part_name, part.price, part.in_stock, part.imported_country, supplier.sup_name \
  FROM supplier\
LEFT OUTER JOIN supplied_by\
  ON supplier.sup_id = supplied_by.sup_id \
LEFT OUTER JOIN part\
  ON supplied_by.part_id = part.part_id;",
      headers: [
        {
          text: "Part Id",
          align: "start",
          sortable: false,
          value: "part_id",
        },
        { text: "Part name", value: "part_name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "in_stock" },
        { text: "Imported country", value: "imported_country" },
        { text: "Supplier name", value: "sup_name" },
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
      console.log("Customers information");
      await fetch("/fetchParts")
        .then((response) => response.json())
        .then((data) => (this.dataInfo = data.rows));

        console.log("Supplier information");
      await fetch("/fetchSuplier")
        .then((response) => response.json())
        .then((data) => {
          var suplist = []
          for (let index = 0; index < data.rows.length; index++) {
            var element = data.rows[index]["sup_name"];
            suplist[index] = element
          }
          this.suppItems = suplist
          console.log(suplist)
          });
    },

  },
};
</script>
