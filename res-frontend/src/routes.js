import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Cardapio from './views/Cardapio.vue'

export const routes = [
    {path: '', component: Login, titulo: 'Login'},
    {path: '/home', component: Home, titulo: 'Home'},
    {path: '/cardapio', component: Cardapio, titulo: 'Cardapio'}
];