<template>
  <v-app>
    <meta name="referrer" content="no-referrer" />
    <v-app-bar app max-height="55">
      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn icon class="hidden-xs-only" @click="$router.go(-1)" :disabled="disableGoBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="hidden-xs-only" @click="$router.push('Config')">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const os = require("os");
const fs = require("fs");
const path = require("path");
export default {
  name: "App",
  data() {
    return {
      disableGoBack: true
    };
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.path === "/") {
        this.disableGoBack = true;
      } else {
        this.disableGoBack = false;
      }
    }
  },
  created() {
    let savePath = fs.existsSync(path.join(os.homedir(), ".coolapk-pic"))
      ? fs.readFileSync(path.join(os.homedir(), ".coolapk-pic")).toString()
      : os.homedir();
    this.$store.commit("setPath", {
      savePath: savePath
    });
  }
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>