import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Cadastro from './views/Cadastro.vue'
import Estabelecimento from './views/LoginEstabelecimento.vue'
import CadEstabelecimento from "./views/CadastroEstabelecimento.vue"
import HomeEstabelecimento from "./views/HomeEstabelecimento.vue"
import Pedido from './views/Pedido.vue'
import ModalCartaoCredito from './components/cartaoCredito.vue'


export const routes = [
    {path: '', component: Login, name: 'Login'},
    {path: '/home', component: Home, name: 'Home'},
    {path: '/cadastro', component: Cadastro, name: 'Cardapio'},
    {path: '/login-estabelecimento', component: Estabelecimento, name: 'Login Estabelecimento'},
    {path: '/cad-estabelecimento', component: CadEstabelecimento, name: 'Cadastro Estabelecimento'},
    {path: '/home-estabelecimento', component: HomeEstabelecimento, name: 'Home Estabelecimento'},
    {path: '/pedido', component: Pedido, name: 'Pedido'},
    {path: '/cad-cartao', component: ModalCartaoCredito, name: 'CadCartao'},
];