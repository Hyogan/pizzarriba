import { createWebHashHistory,createRouter } from "vue-router";
import About from "../components/Pages/About.vue"
import Home from "../components/Pages/Home"
import Empty from "../views/Empty.vue"
import Team from "../views/Team.vue"
import Card from "../views/Card.vue"
import Advices from "../views/Advices.vue"
// import 
const routes = [
    {
        path : "/",
        component : Home
    },
    {
        path : "/about",
        component : About
    },
    {
        path : "/products",
        component : Empty
    },
    {
        path : "/team",
        component : Team
    },
    {
        path : "/card",
        component : Card
    },
    {
        path : "/advices",
        component : Advices
    }
];

    const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router