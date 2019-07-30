<template>
  <v-container style="margin-top: 74px">
    <v-layout>
      <v-flex :class="loading ? 'center' : ''">
        <div class="text-center" v-if="loading">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <v-card v-else>
          <v-card-media>
            <img :src="image + movie.poster_image1" :alt="movie.title" />
            <v-card-text>
              <v-card-title>
                {{ movie.title }}
              </v-card-title>
            </v-card-text>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "single",
  data: function() {
    return {
      image: "http://127.0.0.1:8000/storage/poster-image1/",
      loading: true
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      this.loading = true;
      this.$store
        .dispatch("fetch_movie_detail", this.$route.params.slug)
        .then(res => {
          console.log("Loaded");
          this.loading = false;
        });
    }
  },
  mounted() {
    this.$store
      .dispatch("fetch_movie_detail", this.$route.params.slug)
      .then(res => {
        this.loading = true;
      });
  },
  computed: {
    movie() {
      return this.$store.state.movies.movie_detail;
    }
  }
};
</script>
<style scoped>
.center {
  text-align: center;
}
</style>
