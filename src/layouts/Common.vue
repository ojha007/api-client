<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="mt-3 mb-3">
    <v-tabs>
      <div v-if="tab === false">
        <v-tab class="white--text font-weight-bold" aria-disabled="true"
          >{{ title }}
        </v-tab>
        <v-tab class="white--text">All</v-tab>
        <v-tab class="white--text">Horror</v-tab>
        <v-tab class="white--text">Sci-Fi</v-tab>
      </div>
      <v-tab-item v-for="n in 3" :key="n">
        <v-layout wrap align-center justify-center row fill-heigh>
          <v-flex
            xs5
            md2
            class="myList"
            ma-2
            v-for="movie in movies"
            :key="movie.id"
          >
            <v-card outlined hover style="padding: 2px">
              <v-img
                :alt="movie.title"
                lazy-src="https://picsum.photos/id/11/10/6"
                class="white--text"
                height="200px"
                :src="image + movie.poster_image1"
              >
                <v-card-title class="align-end fill-height myBackground">
                  {{ movie.title }}
                </v-card-title>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<style scoped>
.v-sheet {
  border-radius: 15px !important;
}
</style>
<script>
export default {
  name: "common",
  props: ["image", "movies", "title", "tab"]
};
</script>
