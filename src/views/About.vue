<template>
  <div class="about">
    <v-container class="grey darken-3" fluid>
      <v-container class="pa-0">
        <v-layout>
          <v-flex>
            <h1 class="white--text">About US</h1>
            <hr />
            <ul>
              <li v-for="(movie , index) in movies" >{{ index }}</li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("fetch_movies");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  }
};
</script>
