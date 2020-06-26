<template>
  <h1>this is detail</h1>
</template>
<script>
export default {
  created() {
    this.$store.commit("setTitle", {
      title: "图集"
    });
  }
};
</script>