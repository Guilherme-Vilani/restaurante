<template>
  <div class="center">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item @click.native="redirectLoginCliente" index="1">Cliente</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Estabelecimento</template>
        <el-menu-item @click="redirectCadastroEstabelecimento()" index="2-1">Cadastrar Estabelecimento</el-menu-item>
        <el-menu-item @click="redirectEstabelecimento()" index="2-2">Login</el-menu-item>
      </el-submenu>
    </el-menu>
    <p class="titulo">Login Cliente</p>
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
      id: "",
    };
  },

  methods: {
    redirectHome() {
      axios
        .post("http://localhost:3001/cliente/login", this.login)
        .then((response) => {
          this.id = response.data._id;
          localStorage.id = this.id;
          this.$router.push("/home", { user: response.data });
        })
        .catch(() => {
          this.notifyError();
        });
    },
    redirectLoginCliente(){
      this.$router.push("/")
    },
    redirectCadastro() {
      this.$router.push("/cadastro");
    },
    redirectEstabelecimento() {
      this.$router.push("/login-estabelecimento");
    },
    redirectCadastroEstabelecimento(){
      this.$router.push("/cad-estabelecimento");
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