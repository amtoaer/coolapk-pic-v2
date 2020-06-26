<template>
  <v-row dense>
    <v-col v-for="i in this.length" :key="i" :cols="6">
      <v-card>
        <a>
          <v-img
            :src="currentPicture[i-1]"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="700"
            @click="download(currentPicture[i-1])"
          >
            <v-card-title :v-text="i"></v-card-title>
          </v-img>
        </a>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      length: 0
    };
  },
  computed: {
    currentPicture() {
      return this.$store.state.currentPicture;
    }
  },
  created() {
    this.$store.commit("setTitle", {
      title: "图集"
    });
    this.length = this.$store.state.currentPicture.length;
  }
};
</script>