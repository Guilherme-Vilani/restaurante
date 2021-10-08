<template>
  <div>
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