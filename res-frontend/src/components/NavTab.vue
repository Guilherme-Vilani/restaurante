<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item @click.native="redirectHome" index="1">Home</el-menu-item>
    <el-menu-item @click.native="redirectPedidos" index="2"
      >Pedidos</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "NavTab",
  methods: {
    redirectPedidos() {
      this.$router.push("/pedido");
    },
    redirectHome() {
      if (this.$router.name == "Home") {
        null;
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>