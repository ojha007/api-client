<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="about">
    <v-container fluid>
      <v-container class="pa-0">
        <v-layout>
          <div v-if="movies_by_genres.length < 1"></div>
          <v-flex>
            <h1 class="white--text">All Movies</h1>
            <hr />
            <v-container pa-0>
              <div class="mt-3" v-if="movies_by_genres.length > 1">
                <v-layout wrap align-center justify-center row fill-heigh>
                  <v-flex
                    xs5
                    md2
                    class="myList"
                    ma-2
                    v-for="movie in movies_by_genres"
                    :key="movie.id"
                  >
                    <v-card outlined hover style="padding: 2px">
                      <v-img
                        class="white--text"
                        height="200px"
                        :src="image + movie.poster_image1"
                        lazy-src="https://picsum.photos/id/11/10/6"
                      >
                        <v-card-title class="align-end fill-height">
                          {{ movie.title }}
                        </v-card-title>
                      </v-img>
                    </v-card>
                  </v-flex>
                </v-layout>
              </div>
              <v-layout v-else>
                <v-flex text-center justify-center>
                  <h1 class="red--text">No Movie Found</h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: "http://127.0.0.1:8000/storage/poster-image1/",
      msg: "Loading",
      html: '<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>'
    };
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("fetch_movies_by_genres", to.params.slug);
    }
  },

  mounted: function() {
    this.$store.dispatch("fetch_movies_by_genres", this.$route.params.slug);
  },
  computed: {
    movies_by_genres() {
      return this.$store.state.movies.movies_by_genres;
    }
  }
};
</script>
