<template>
  <div>
    <NavTab />
    <h1>Pedidos</h1>

    <ul>
      <li
        class="teste"
        style="list-style: none"
        v-for="item in lstPedido"
        :key="item._id"
      >
        <el-card class="card">
          <div>Nome: {{ item.nome }}</div>
          <div>Valor: R$ {{ item.valor }},00</div>
          
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import NavTab from "../components/NavTab.vue";
import axios from "axios";
export default {
  data() {
    return {
      lstPedido: []
    };
  },
  name: "Pedidos",
  components: {
    NavTab,
  },
  props: {},
  mounted() {
    axios
      .get(`http://localhost:3001/pedido/listar/${localStorage.id}`)
      .then((response) => {
        this.lstPedido = response.data
        console.log(response);
      })
      .catch(() => {
        this.notifyError();
      });
  },
};
</script>

<style scoped>
.card{
  margin-top: 10px;
}
</style>