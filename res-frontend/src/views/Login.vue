<template>
  <div class="center">
    <p class="titulo">Login</p>
    <div>
      <el-input
        class="input"
        placeholder="E-mail"
        v-model="login.email"
      ></el-input>
    </div>
    <div>
      <el-input
        class="input"
        type="password"
        placeholder="Senha"
        v-model="login.senha"
      ></el-input>
    </div>

    <div>
      <el-button
        @click="redirectHome"
        class="button-entrar"
        style=""
        type="success"
        >Entrar</el-button
      >
    </div>
    <el-button
      @click="redirectCadastro"
      class="button-entrar"
      style=""
      type="primary"
      >Cadastre-se</el-button
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    redirectHome() {
      axios
        .post("http://localhost:3001/cliente/login", this.login)
        .then((response) => {
          this.$dataCliente = response.data;
          console.log(this.$dataCliente);
          this.$router.push("/home");
        })
        .catch(() => {
          this.notifyError();
        });
    },
    redirectCadastro() {
      this.$router.push("/cadastro");
    },
    notifyError() {
      this.$notify.error({
        title: "Email e Senha não encontrados!",
        message: "Verifique o Email e Senha e tente novamente.",
      });
    },
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