<template>
  <div class="center">
    <p class="titulo">Login Estabelecimento</p>
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
        @click="redirectHomeEstabelecimento"
        class="button-entrar"
        style=""
        type="success"
        >Entrar</el-button
      >
    </div>
    <el-button
      @click="redirectCadEstabelecimento"
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
      id:""
    };
  },
  name: "Login Estabelecimento",
  methods: {
    redirectHomeEstabelecimento() {
      axios
        .post("http://localhost:3001/estabelecimento/login", this.login)
        .then((response) => {
          this.id = response.data._id;
          localStorage.id = this.id;
          this.$router.push("/home-estabelecimento");
        })
        .catch(() => {
          this.notifyError();
        });
    },
    redirectCadEstabelecimento() {
      this.$router.push("/cad-estabelecimento");
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