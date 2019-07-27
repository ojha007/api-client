<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="mt-3 mb-3">
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
            :src="imageURL + movie.poster_image2"
          >
            <v-card-title class="align-end fill-height myBackground">
              {{ movie.title }}
            </v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: "common",
  props: ["imageURL", "movies"]
};
</script>
