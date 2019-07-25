<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>
<script>
import Navbar from "./layouts/Navbar";
export default {
  components: { Navbar }
};
</script>
