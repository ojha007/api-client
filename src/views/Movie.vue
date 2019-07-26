<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="about">
    <v-container class="grey darken-3" fluid>
      <v-container class="pa-0">
        <v-layout>
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
                        src="https://i.pinimg.com/originals/1b/a0/f6/1ba0f667816027598e935fdb5def49c9.jpg"
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
  mounted: function() {
    this.$store.dispatch("fetch_movies_by_genres");
  },
  computed: {
    movies_by_genres() {
      return this.$store.state.movies.movies_by_genres;
    }
  }
};
</script>
