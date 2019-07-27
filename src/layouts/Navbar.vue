<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="navbar">
    <v-container fluid pa-0>
      <v-flex>
        <v-toolbar class="grey darken-4" height="70" dense fixed>
          <v-toolbar-title>
            <img src="@/assets/main.jpg" alt="Movie Hint" height="70" />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down white--text">
            <router-link class="v-btn v-btn--flat v-btn--active" to="/">
              <v-btn flat class="white--text">Home </v-btn>
            </router-link>
            <v-menu
              offset-y
              :nudge-width="250"
              min-width="390"
              :nudge-top="100"
              top
              open-on-hover
            >
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark flat v-on="on">
                  Genres
                </v-btn>
              </template>
              <v-card dark width="600">
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-btn :key="index" flat v-for="(genre, index) in genres">
                      <router-link
                        class="white--text"
                        style="text-decoration: none;"
                        :to="{ name: 'genres', params: { slug: genre.slug } }"
                      >
                        {{ genre.name }}
                      </router-link>
                    </v-btn>
                  </v-layout>
                </v-container>
              </v-card>
            </v-menu>
            <v-btn flat class="white--text">HollyWood</v-btn>
            <v-btn flat class="white--text">BollyWood</v-btn>
            <v-btn flat class="white--text">South Movie</v-btn>
            <v-btn flat class="white--text">Web Series</v-btn>
            <router-link class="v-btn v-btn--flat v-btn__content" to="/about">
              <v-btn flat class="white--text">
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
            <v-text-field
              class="mx-2 mt-2"
              flat
              hide-details
              label="Search"
              prepend-inner-icon="search"
              solo-inverted
            ></v-text-field>
          </v-toolbar-items>
        </v-toolbar>
      </v-flex>
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
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      console.log(locale);
    }
  },
  mounted() {
    this.$store.dispatch("fetch_genres");
  },
  computed: {
    genres: function() {
      return this.$store.state.genres.genres;
    }
  }
};
</script>
<style>
.theme--light.v-text-field--solo-inverted.v-text-field--solo>.v-input__control>.v-input__slot {
    background: white !important;
}
.v-text-field.v-text-field--solo .v-label {
  color: black !important;
}
</style>
