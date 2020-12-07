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
                <v-col cols="12" md="6">
                  <v-text-field label="First name"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Last Name"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="SSN"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Primary phone"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field label="Primary email"></v-text-field>
                </v-col>

                

                <v-col cols="12" md="4">
                  <v-checkbox
                    v-model="allowSpaces"
                    label="Organization"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <!-- <v-row>
                <v-col cols="12" md="6">
                  <v-select
                    label="Supplier"
                    :items="suppItems"
                    required
                  ></v-select>
                </v-col>
              </v-row> -->
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions justify-center align-center>
            <v-btn
              color="green lighten-0.5 white--text"
              @click="dialog = false"
            >
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
    ></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "Customer",
      query: "SELECT * FROM customer;",
      headers: [
        {
          text: "Customer Id",
          align: "start",
          sortable: false,
          value: "cust_id",
        },
        { text: "Firstname", value: "cust_fname" },
        { text: "Lastname", value: "cust_lname" },
        { text: "SSN", value: "ssn" },
        { text: "Email", value: "primary_email" },
        { text: "Phone", value: "primary_phone" },
        { text: "From Organization", value: "is_organization" },
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
      await fetch("/fetchCustomers")
        .then((response) => response.json())
        .then((data) => (this.dataInfo = data.rows));
    },
  },
};
</script>
