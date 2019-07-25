<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="navbar">
    <v-container fluid pa-0>
      <v-flex>
        <v-toolbar dark height="90">
          <v-toolbar-title>
            <img src="@/assets/main.jpg" alt="Movie Hint" height="100" />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/" class="v-btn v-btn--flat v-btn--active">
              <v-btn flat>Home </v-btn>
            </router-link>

            <v-btn flat>HollyWood</v-btn>
            <v-btn flat>BollyWood</v-btn>
            <v-btn flat>South Movie</v-btn>
            <v-btn flat>Web Series</v-btn>
            <router-link to="/about" class="v-btn v-btn--flat v-btn__content">
              <v-btn flat>
                About
              </v-btn>
            </router-link>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark flat v-on="on">
                  <flag iso="es" title="Spanish"></flag>
                </v-btn>
              </template>
              <v-list dark>
                <v-list-tile
                  v-for="(lang, index) in languages"
                  :key="index"
                  @click="changeLocale"
                >
                  <v-list-tile-title>
                    <flag iso="jp"></flag>
                    {{ lang.title }}</v-list-tile-title
                  >
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-toolbar-items>
        </v-toolbar>
      </v-flex>
      <v-carousel
        cycle
        height="400"
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
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      languages: [
        { title: "English", flag: "us" },
        { title: "Spanish", flag: "es" }
      ],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  methods: {
    changeLocale(locale) {
      console.log(locale);
    }
  }
};
</script>
