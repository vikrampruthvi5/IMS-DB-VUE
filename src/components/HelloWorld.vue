<template>
  <div class="hello">

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
     data: () => ({
    apiResponse: ""
  }),
  props: {
    msg: String
  },
  methods: {
    async hitEndpoint() {
      console.log("End point ni")
       await fetch("/db1")
        .then(response => response.json())
        .then(data => this.apiResponse = data.rows);
    },
    async hitEndpoint1() {
      console.log("hitEndpoint")
       await fetch("/db2")
        .then(response => response.json())
        .then(data => this.apiResponse = data.rows);
    }
  }
  }
</script>
