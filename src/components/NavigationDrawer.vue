<template>
  <nav class="Nav">
    <v-toolbar app dark>
      <h1 class="grey--text">
        <span class="orange--text">I</span>nventory
        <span class="orange--text">M</span>anagement
        <span class="orange--text">S</span>ystem
      </h1>
    </v-toolbar>

    <v-toolbar app class="mb-5" dense>
      <div class="navItems justify-center text-center align-content-center" align-center justify-center>
        <a
          v-for="item in items_links"
          :key="item.Text"
          :href="item.link"
          style="text-decoration:None; font-weight: 600;"
          class="dark-blue--text bold mx-2"
        >
          | {{ item.Text }} | 
        </a>
        
      </div>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      items_links: [
        { Text: "Customers", link: "/" },
        { Text: "Parts", link: "/PartsData" },
        { Text: "Views", link: "/Views" },
      ],
    };
  },
  
};
</script>
