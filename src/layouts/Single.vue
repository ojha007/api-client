<template>
  <v-container style="margin-top: 74px">
    <v-card>
      <v-layout py-4 pl-4>
        <v-flex shrink>
          <v-img
            height="300"
            width="200"
            :src="image + movie.poster_image1"
          ></v-img>
        </v-flex>
        <v-flex text-center>
          <v-container grid-list-lg pa-0>
            <v-layout column>
              <v-flex>
                <v-card-title class="text--darken-1">
                  <h1>{{ movie.title }}</h1></v-card-title
                >
                <hr />
                <v-card-text>
                  <h4>{{ movie.overview }}</h4></v-card-text
                >
                <v-layout wrap class="ma-2 text-md-center">
                  <v-flex md1> Genres :</v-flex>
                  <v-list
                    v-for="movie_genres in movie.genres"
                    :key="movie_genres.id"
                  >
                    <router-link
                      :to="{
                        name: 'genres',
                        params: { slug: movie_genres.slug }
                      }"
                    >
                      <v-list-tile-title class="px-1">
                        {{ movie_genres.name }}
                      </v-list-tile-title>
                    </router-link>
                  </v-list>
                </v-layout>
                <v-card-actions>
                  <v-btn-toggle>
                    <v-btn class="success">Download</v-btn>
                  </v-btn-toggle>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
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
