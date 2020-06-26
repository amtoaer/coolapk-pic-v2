<template>
  <h1>this is config</h1>
</template>
<script>
export default {
  created() {
    this.$store.commit("setTitle", {
      title: "设置"
    });
  }
};
</script>