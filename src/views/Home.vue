<template>
  <div>
    <v-row dense>
      <v-col v-for="item in pictureList" :key="item.entityId">
        <v-card width="344" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar>
              <v-img v-bind:src="item.userAvatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{item.username}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img v-bind:src="item.pic" height="600"></v-img>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">详情</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div align="center">
      <v-pagination v-model="page" :length="100" :total-visible="7"></v-pagination>
    </div>
  </div>
</template>
<script>
import backend from "../backend";
export default {
  data: () => {
    return {
      page: 1
    };
  },
  computed: {
    pictureList() {
      return this.$store.state.pictureList;
    }
  },
  watch: {
    page: async function handleChange() {
      let result = await backend.get(
        "https://api.coolapk.com/v6/picture/list?page=" + this.page
      );
      this.$store.commit("setPictureList", {
        pictureList: result
      });
    }
  },
  async created() {
    this.$store.commit("setTitle", {
      title: "主页"
    });
    if (this.$store.state.pictureList.length === 0) {
      let result = await backend.get(
        "https://api.coolapk.com/v6/picture/list?page=1"
      );
      this.$store.commit("setPictureList", {
        pictureList: result
      });
    }
  }
};
</script>