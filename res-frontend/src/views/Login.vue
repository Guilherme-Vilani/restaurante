<template>
  <div class="center">
    <p class="titulo">Login</p>
    <div>
      <el-input
        class="input"
        placeholder="E-mail"
        v-model="inputEmail"
      ></el-input>
    </div>
    <div>
      <el-input
        class="input"
        type="password"
        placeholder="Senha"
        v-model="inputSenha"
      ></el-input>
    </div>

    <el-button
      @click="redirectHome"
      class="button-entrar"
      style=""
      type="primary"
      >Entrar</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputEmail: "",
      inputSenha: "",
    };
  },

  methods: {
    redirectHome() {},
  },
};
</script>


<style scoped>
.center {
  text-align: center;
}

.button-entrar {
  width: 220px;
  margin-top: 10px;
}

.input {
  width: 220px;
  margin-bottom: 10px;
}

.titulo {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
}
</style>