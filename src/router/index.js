import { createRouter, createWebHashHistory } from 'vue-router'

import Landing from 'Core/Landing.vue'
import Greeting from 'Core/components/app/Greeting.vue'

const routes = [
    { path: '/', component: Greeting },
    { path: '/about', component: Landing },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router