<template>
  <div class="app">
    <img src="https://img.icons8.com/clouds/100/000000/restaurant.png" />
    <h1>{{ msg }}</h1>
    <!-- <el-button class="button" type="success">Cardapio</el-button> -->
    <!-- <el-button class="button" type="success">Carrinho</el-button> -->
    <!-- <div>
      {{ lstEstabelecimento }}
    </div> -->
    <ul>
      <li v-for="item in lstEstabelecimento" :key="item._id">
        <el-card class="card">
          <img class="image" :src="item.image" alt="" />
          <el-collapse class="">
            <el-collapse-item :title="item.nome">
              <div
                v-for="itemCardapio in item.cardapio"
                :key="itemCardapio.nome"
              >
                <el-card
                  @click.native="teste(itemCardapio)"
                  class="cardCardapio"
                >
                  <div>
                    {{ itemCardapio.nome }}
                  </div>
                  <div>Descrição: {{ itemCardapio.descricao }}</div>
                  Valor: R$ {{ itemCardapio.valor }},00
                </el-card>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </li>
    </ul>
    <Modal :pedido="teste" v-show="selecionou"></Modal>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "./Modal.vue"
export default {
  data() {
    return {
      msg: "Foods do Guilherme",
      selecionou: false,
      lstEstabelecimento: [],
      lstCardapio: []
    };
  },
  components: {
    Modal
  },
  name: "Home",
  props: {},
  methods: {
    teste(itemCardapio) {
      itemCardapio;
      this.selecionou = true;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3001/estabelecimento/listar")
      .then((response) => (this.lstEstabelecimento = response.data));
    this.lstCardapio = this.lstEstabelecimento;
  },
};
</script>


<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
.button {
  width: 220px;
  margin-top: 10px;
}
.card {
  width: 450px;
  padding-right: 20px;
  margin-bottom: 10px;
}
.image {
  width: 60%;
}
.cardCardapio {
  text-align: left;
  margin-top: 10px;
}
.teste {
  text-align: center;
}
.card-teste {
  width: 50%;
}
</style>
