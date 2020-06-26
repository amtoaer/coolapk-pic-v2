<template>
  <v-row>
    <v-col cols="22">
      <v-text-field label="保存路径" :value="path" readonly></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-btn block large @click="changePath()">修改</v-btn>
    </v-col>
  </v-row>
</template>
<script>
const os = require("os");
const fs = require("fs");
const path = require("path");
const { ipcRenderer } = require("electron");
export default {
  data() {
    return {
      path: ""
    };
  },
  methods: {
    changePath() {
      ipcRenderer.send("openDialog", "openDirectory");
      ipcRenderer.on("selectedItem", this.setPath);
    },
    setPath(event, chosenPath) {
      this.path = chosenPath;
      this.$store.commit("setPath", {
        savePath: this.path
      });
      fs.writeFile(path.join(os.homedir(), ".coolapk-pic"), this.path, function(
        err
      ) {
        if (err) {
          return console.error(err);
        }
      });
    }
  },
  created() {
    this.$store.commit("setTitle", {
      title: "设置"
    });
    this.path = this.$store.state.savePath;
  }
};
</script>