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
        <v-layout class="mt-3">
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
              <v-flex dflex xs3 md2 lg2 ma-2 v-on="on">
                <v-card outlined hover style="padding: 2px">
                  <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title class="align-end fill-height">
                      I'm a title</v-card-title
                    >
                  </v-img>
                </v-card>
              </v-flex>
            </template>
            <v-card>
              <v-list>
                <v-list-tile>
                  P
                </v-list-tile>
              </v-list>
            </v-card>
          </v-menu>

          <v-flex dflex xs3 md2 lg2 ma-2>
            <v-card outlined hover style="padding: 2px">
              <v-img
                class="white--text"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title class="align-end fill-height">
                  I'm a title</v-card-title
                >
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
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
  }
};
</script>
