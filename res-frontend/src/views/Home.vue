<template>
  <div class="app">
    <img src="https://img.icons8.com/clouds/100/000000/restaurant.png" />
    <h1>{{ msg }}</h1>
    <!-- <el-button class="button" type="success">Cardapio</el-button>
    <el-button class="button" type="success">Carrinho</el-button> -->
    <ul>
      <li v-for="item in cardapio" :key="item.nome">
        <el-card class="card">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div>
            <span>Yummy hamburger</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Restaurante do Guilherme",
      cardapio: [
        {
          nome: "macarrao",
        },
        {
          nome: "frango",
        },
      ],
    };
  },
  name: "Home",
  props: {},
};
</script>


<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  width: 220px;
  margin-top: 10px;
}
.card {
  width: 450px;
  padding-right: 20px;
}
.image {
  width: 60%;
}
</style>
