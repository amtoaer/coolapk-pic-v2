<template>
  <v-row dense>
    <v-dialog v-model="isShow" max-width="290">
      <v-card>
        <v-card-title class="headline">成功</v-card-title>
        <v-card-text>图片下载完成！</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="isShow = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col v-for="i in this.length" :key="i" :cols="6">
      <v-card width="344" class="mx-auto">
        <a>
          <v-img
            :src="currentPicture[i-1]"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="700"
            @click="download(currentPicture[i-1])"
          ></v-img>
        </a>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import backend from "../backend";
export default {
  data() {
    return {
      length: 0,
      isShow: false
    };
  },
  methods: {
    download(picUrl) {
      let result = backend.download(picUrl);
      if (result) {
        this.isShow = true;
      }
    }
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