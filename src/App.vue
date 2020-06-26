<template>
  <v-app>
    <meta name="referrer" content="no-referrer" />
    <v-app-bar app max-height="55">
      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn icon class="hidden-xs-only" @click="$router.go(-1)">
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
export default {
  name: "App",
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>