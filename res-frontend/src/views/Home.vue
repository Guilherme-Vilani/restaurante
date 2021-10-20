<template>
  <div class="app">
    <!-- <NavTab /> -->
    <el-col>
      <img src="https://img.icons8.com/clouds/100/000000/restaurant.png" />
      <img
        class="img"
        @click="abreModalCadastroCartao()"
        src="https://img.icons8.com/ios/50/000000/bank-card-back-side.png"
      />
    </el-col>
    <h1>{{ msg }}</h1>
    <ul>
      <li
        class="teste"
        style="list-style: none"
        v-for="item in lstEstabelecimento"
        :key="item._id"
      >
        <el-card class="card">
          <img class="image" :src="item.image" alt="" />
          <el-collapse>
            <el-collapse-item :title="item.razaoSocial">
              <div
                v-for="itemCardapio in item.cardapio"
                :key="itemCardapio.nome"
              >
                <el-card
                  @click.native="teste(itemCardapio, item)"
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

    <div class="modal-mask" v-show="selecionou">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Confirmar pedido?</slot>
          </div>

          <div class="modal-body">
            <slot name="body">{{ itemSelecionado.nome }}</slot>
          </div>

          <div class="modal-body">
            <slot name="body">Valor: R${{ itemSelecionado.valor }},00</slot>
          </div>

          <div class="modal-footer">
            <el-button @click="salvaPedido" type="success">Confirmar</el-button>
            <el-button @click="fechaModal" type="danger">Cancelar</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import NavTab from "../components/NavTab.vue"
export default {
  data() {
    return {
      msg: "Foods do Guilherme",
      lstEstabelecimento: [],
      lstCardapio: [],
      selecionou: false,
      itemSelecionado: "",
      itemAll: [],
      pedido: {
        nome: "",
        valor: "",
        idEstabelecimento: "",
        idCliente: "",
      },
    };
  },
  components: {
    // NavTab
  },
  name: "Home",
  props: {},
  methods: {
    open1() {
      this.$notify({
        title: "Pedido feito com sucesso",
        message:
          "O seu pedido já foi enviado para o " + this.itemAll.razaoSocial,
        type: "success",
      });
    },
    teste(itemCardapio, item) {
      this.itemSelecionado = itemCardapio;
      this.itemAll = item;
      this.pedido.nome = this.itemSelecionado.nome;
      this.pedido.valor = this.itemSelecionado.valor;
      this.pedido.idEstabelecimento = this.itemAll._id;
      this.pedido.idCliente = localStorage.id;
      this.selecionou = true;
    },
    abreModalCadastroCartao(){
      this.$router.push("/cad-cartao");
    },
    fechaModal() {
      this.selecionou = false;
    },
    salvaPedido() {
      axios
        .post("http://localhost:3001/pedido/registro", this.pedido)
        .then(() => {
          console.log(this.pedido);
          this.open1();
          this.fechaModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log(this.$router.params);
    axios
      .get("http://localhost:3001/estabelecimento/listar")
      .then((response) => (this.lstEstabelecimento = response.data));
    this.lstCardapio = this.lstEstabelecimento;
  },
};
</script>


<style scoped>
.img {
  position: absolute;
  top: 20px;
  right: 20px;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.card {
  width: 300px;
  margin-bottom: 10px;
  background-color: #f5ffcf;
}
.collapse {
  background-color: #f5ffcf;
}
.image {
  margin-bottom: 10px;
}
.cardCardapio {
  text-align: left;
  margin-top: 10px;
}
.teste {
  justify-content: center;
  text-align: center;
  display: grid;
}

/* STYLE DO MODAL */

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
