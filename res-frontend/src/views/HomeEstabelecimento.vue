<template>
  <div>
    <NavTab />
    <img :src="dadosEstabelecimento.image" alt="" />

    <div>
      <el-card class="card">
        Razão Social: {{ dadosEstabelecimento.razaoSocial }}
      </el-card>

      <el-card class="card">
        Nome Fantasia: {{ dadosEstabelecimento.nomeFantasia }}
      </el-card>

      <el-card class="card"> Email: {{ dadosEstabelecimento.email }} </el-card>

      <el-card class="card"> CNPJ: {{ dadosEstabelecimento.cnpj }} </el-card>
    </div>
    <!-- <div>
      {{ dadosEstabelecimento }}
    </div> -->
    <br /><br /><br />
    <div>
      CARDAPIO
      <el-button @click="abreModal" class="button" type="success">+</el-button>
    </div>
    <ul>
      <li
        class="teste"
        style="list-style: none"
        v-for="item in dadosEstabelecimento.cardapio"
        :key="item._id"
      >
        <el-card>
          <div>Nome: {{ item.nome }}</div>
          <div>Valor: R$ {{ item.valor }},00</div>
          <div>Marca: {{ item.marca }}</div>
          <div>Descrição: {{ item.descricao }}</div>
        </el-card>
      </li>
    </ul>

    <div class="modal-mask" v-show="adicionando">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Adicionar prato no cardapio</slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <el-input
                v-model="cardapio.nome"
                class="card"
                placeholder="Nome do prato"
                type="text"
              />
              <input
                v-model="cardapio.valor"
                class="card"
                placeholder="Valor do prato"
                type="text"
              />
              <input
                v-model="cardapio.marca"
                class="card"
                placeholder="Marca do prato"
                type="text"
              />
              <input
                v-model="cardapio.descricao"
                class="card"
                placeholder="Descrição do prato"
                type="text"
              />
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
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
import NavTab from '../components/NavTab.vue'
export default {
  data() {
    return {
      dadosEstabelecimento: {},
      adicionando: false,
      cardapio: {
        nome: "",
        valor: "",
        marca: "",
        descricao: "",
      },
    };
  },
  components: {
    NavTab
  },
  methods: {
    salvaPedido() {
      this.dadosEstabelecimento.cardapio.push(this.cardapio);

      this.excluiEstabelecimento();

      axios
        .post(
          "http://localhost:3001/estabelecimento/registro",
          this.dadosEstabelecimento
        )
        .then((response) => {
          console.log(response.data);
          this.adicionando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    abreModal() {
      this.adicionando = true;
    },

    excluiEstabelecimento() {
      axios
        .delete(
          `http://localhost:3001/estabelecimento/excluir/${localStorage.id}`
        )
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .post(
          "http://localhost:3001/estabelecimento/login",
          this.dadosEstabelecimento
        )
        .then((response) => {
          localStorage.id = response.data._id;
        })
        .catch(() => {
          this.notifyError();
        });
    },

    fechaModal() {
      this.adicionando = false;
    },
  },
  name: "Home Estabelecimento",
  mounted() {
    axios
      .get(`http://localhost:3001/estabelecimento/listar/${localStorage.id}`)
      .then((response) => {
        console.log(response.data);
        this.dadosEstabelecimento = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.card {
  margin-top: 10px;
}
.button {
  font-size: 20px;
  text-align: right;
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