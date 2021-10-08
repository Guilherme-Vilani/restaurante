<template>
  <div>
    <h1>Cadastro</h1>
    <div>
      <el-input
        class="input"
        placeholder="Nome"
        v-model="cliente.nome"
      ></el-input>
    </div>
    <div>
      <el-input
        class="input"
        placeholder="E-mail"
        v-model="cliente.email"
      ></el-input>
    </div>
    <div>
      <el-input
        class="input"
        placeholder="Senha"
        v-model="cliente.senha"
      ></el-input>
    </div>
    <div>
      <el-input
        class="input"
        placeholder="Telefone"
        v-model="cliente.telefone"
      ></el-input>
    </div>
    <div>
      <el-input
        class="input"
        placeholder="Idade"
        v-model="cliente.idade"
      ></el-input>
    </div>
    <el-button @click="cadastrarCliente" class="button" type="success"
      >Pronto</el-button
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cliente: {
        nome: "",
        email: "",
        telefone: "",
        idade: "",
        senha: "",
      },
    };
  },

  methods: {
    cadastrarCliente() {
      console.log(this.cliente);
      axios
        .post("http://localhost:3001/cliente/registro", this.cliente)
        .then(() => {
          this.$router.push("/home");
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