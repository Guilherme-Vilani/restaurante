<template>
  <div>
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
    <h1>Cadastro Estabelecimento</h1>
    <div>
      <el-input v-model="estabelecimento.razaoSocial" class="input" placeholder="Razão Social"></el-input>
    </div>
    <div>
      <el-input v-model="estabelecimento.nomeFantasia" class="input" placeholder="Nome Fantasia"></el-input>
    </div>
    <div>
      <el-input v-model="estabelecimento.cnpj" class="input" placeholder="CNPJ"></el-input>
    </div>
    <div>
      <el-input v-model="estabelecimento.telefone" class="input" placeholder="Telefone"></el-input>
    </div>
    <div>
      <el-input v-model="estabelecimento.email" class="input" placeholder="E-mail"></el-input>
    </div>
    <div>
      <el-input v-model="estabelecimento.image" class="input" placeholder="Imagem"></el-input>
    </div>
    <div>
      <el-input v-model="estabelecimento.senha" class="input" placeholder="Senha"></el-input>
    </div>

    <el-button @click="cadastrarEstabelecimento" class="button" type="success"
      >Pronto</el-button
    >
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      estabelecimento: {
        razaoSocial: "",
        cnpj: "",
        nomeFantasia: "",
        telefone: "",
        email: "",
        senha: "",
        cardapio: [],
        image: "",
      },
    };
  },
  name: "Cadastro Estabelecimento",
  methods: {
    cadastrarEstabelecimento() {
      axios
        .post("http://localhost:3001/estabelecimento/registro", this.estabelecimento)
        .then(() => {
          this.$router.push("/login-estabelecimento");
        })
        .catch((error) => {
          console.log(error);
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
  },
};
</script>

<style scoped>
.input {
  width: 220px;
  margin-bottom: 10px;
}
.button {
  width: 220px;
  margin-top: 10px;
}
</style>