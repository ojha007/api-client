<template>
  <div class="home">
    <v-container>
      <v-flex>
        <v-card class="mx-auto" outlined="true" media width="200" height="100" absolute>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height"
              >I'm a title</v-card-title
            >
          </v-img>
          <v-card-title>I'm a title</v-card-title>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
