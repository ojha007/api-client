<template>
  <v-container style="margin-top: 74px">
    <v-layout>
      <v-flex>
        <v-card>
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
      image: "http://127.0.0.1:8000/storage/poster-image1/"
    };
  },

  mounted() {
    this.$store.dispatch("fetch_movie_detail", this.$route.params.slug);
  },
  computed: {
    movie() {
      return this.$store.state.movies.movie_detail;
    }
  }
};
</script>
