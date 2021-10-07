import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Cadastro from './views/Cadastro.vue'


export const routes = [
    {path: '', component: Login, titulo: 'Login'},
    {path: '/home', component: Home, titulo: 'Home'},
    {path: '/cadastro', component: Cadastro, titulo: 'Cardapio'}
];