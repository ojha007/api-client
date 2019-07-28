<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="home" style="margin-top: 74px;">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(featured_movie, $index) in featured_movies"
        :key="$index"
        progress
      >
        <v-img
          :alt="featured_movie.title"
          lazy-src="https://picsum.photos/id/11/10/6"
          class="white--text v-image__image v-image__image--cover"
          :src="image + featured_movie.poster_image1"
          aspect-ratio="1"
        >
          <v-responsive dark>
            <v-container fill-height>
              <v-layout align-center>
                <v-flex class="featured_movie_image">
                  <h3 class="display-3">{{ featured_movie.title }}</h3>
                  <hr />
                  <h2 class="text--accent-3">
                    Released On: {{ featured_movie.release_date }}
                  </h2>
                  <span class="subheading">{{ featured_movie.overview }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-responsive>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid class="grey darken-4">
      <v-container pa-0>
        <div class="mt-3 mb-3">
          <v-tabs background-color="none">
            <v-tab class="white--text px-2 font-weight-bold" disabled >SUGGESTIONS</v-tab>
            <v-tab class="white--text"> Recommended</v-tab>
            <v-tab class="white--text"> Hot this week </v-tab>
            <v-tab class="white--text"> Hot this month</v-tab>
            <v-tab class="white--text"> Most favorite</v-tab>

            <v-tab-item>
              <tab-list :movies="upcoming_movies" :image="image"></tab-list>
            </v-tab-item>
            <v-tab-item>
              <tab-list :movies="tv_series" :image="image"></tab-list>
            </v-tab-item>
            <v-tab-item>
              <tab-list :movies="upcoming_movies" :image="image"></tab-list>
            </v-tab-item>
          </v-tabs>

          <v-tabs>
            <v-tab class="white--text px-2" disabled>UpComing Movies</v-tab>
            <v-tab class="white--text"> All</v-tab>
            <v-tab class="white--text">Horror</v-tab>
            <v-tab class="white--text">Sci-Fi</v-tab>

            <v-tab-item>
              <tab-list :movies="upcoming_movies" :image="image"></tab-list>
            </v-tab-item>
            <v-tab-item>
              <tab-list :movies="tv_series" :image="image"></tab-list>
            </v-tab-item>
            <v-tab-item>
              <tab-list :movies="upcoming_movies" :image="image"></tab-list>
            </v-tab-item>
          </v-tabs>
        </div>
        <common
          :movies="recently_added_movies"
          title="Recently Added Movies"
          :image="image"
          :tab="false"
        >
        </common>
        <common
          :movies="top_rated_movies"
          :image="image"
          title="Top Imbd Movies"
          :tab="false"
        ></common>
        <common
          :movies="tv_series"
          :image="image"
          :tab="false"
          title="Tv Series"
        ></common>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Common from "../layouts/Common";
import TabList from "../layouts/tab-list";
export default {
  name: "home",
  components: { TabList, Common },
  data: function() {
    return {
      image: "http://127.0.0.1:8000/storage/poster-image1/",
      featuredImageURL: "http://127.0.0.1:8000/storage/poster-image/",
      fav: true,
      showDetail: false,
      message: false,
      hints: true
    };
  },
  methods: {
    changeTab: function() {
      alert("clicked");
    }
  },
  mounted() {
    this.$store.dispatch("fetch_movies");
  },
  computed: {
    recently_added_movies() {
      return this.$store.state.movies.recently_added_movies;
    },
    featured_movies() {
      return this.$store.state.movies.featured_movies;
    },
    upcoming_movies() {
      return this.$store.state.movies.upcoming_movies;
    },
    top_rated_movies() {
      return this.$store.state.movies.top_rated_movies;
    },
    tv_series() {
      return this.$store.state.movies.tv_movies;
    }
  }
};
</script>
<style>
@media (min-width: 1264px) {
  .myList {
    flex-basis: 16.666666666666664%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 12.666667% !important;
  }
  .featured_movie_image {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    text-align: center;
  }
  .myBackground {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    font-size: 17px;
  }
  .v-sheet {
    border-radius: 15px !important;
  }
}
.theme--light.v-tabs__bar {
  background-color: transparent !important;
}
.theme--light.v-tabs__bar .v-tabs__item--disabled {
  color: white !important;
}
</style>
