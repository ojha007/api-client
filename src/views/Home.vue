<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="home">
    <v-carousel
      cycle
      height="360"
      hide-delimiter-background
      show-arrows-on-hover
      dark
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-layout align-center fill-height justify-center>
            <div class="display-3">{{ slide }} Slide</div>
          </v-layout>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid class="grey darken-4">
      <v-container pa-0>
        <h2 class="white--text px-2">Recently Added</h2>
        <hr />
        <div class="mt-3">
          <v-menu
            open-on-hover
            origin="center center"
            transition="scale-transition"
            v-model="showDetail"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
          >
            <template v-slot:activator="{ on }">
              <v-layout wrap align-center justify-center row fill-heigh>
                <v-flex
                  xs5
                  md2
                  class="myList"
                  ma-2
                  v-on="on"
                  v-for="movie in movies"
                  :key="movie.id"
                >
                  <v-card outlined hover style="padding: 2px">
                    <v-img
                      class="white--text"
                      height="200px"
                      src="https://picsum.photos/id/11/500/300"
                      lazy-src="https://picsum.photos/id/11/10/6"
                    >
                      <v-card-title class="align-end fill-height">
                        {{ movie.title }}
                      </v-card-title>
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </template>
          </v-menu>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      fav: true,
      showDetail: false,
      message: false,
      hints: true
    };
  },
  mounted() {
    this.$store.dispatch("fetch_movies");
  },
  computed: {
    movies() {
      return this.$store.state.movies.movies;
    }
  }
};
</script>
<style>
@media (min-width: 1264px) {
  .myList {
    -ms-flex-preferred-size: 12.666666666666664%;
    flex-basis: 16.666666666666664%;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 12.666667% !important;
  }
}
</style>
