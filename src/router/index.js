import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'login', component: () => import('@comps/Login.vue')},
    { path: '/dashboard', name: 'dashboard', component: () => import('@views/Dashboard.vue'), children: [
        { path: '',  component: () => import('@comps/Summary.vue') },
        { path: '/servers',  component: () => import('@comps/Servers.vue') },
        { path: '/keys',  component: () => import('@comps/Keys.vue') },
        { path: '/commands',  component: () => import('@comps/Commands.vue') },
        { path: '/accounts',  component: () => import('@comps/Accounts.vue') },
        { path: '/settings',  component: () => import('@comps/Settings.vue') },
        { path: '/calc',  component: () => import('@comps/Calc.vue') },
    ]},
    { path: '/:pathMatch(.*)*', component: () => import('@views/404.vue') },
]

export const Router = createRouter({
    history: createWebHistory(),
    routes
})

Router.beforeEach((to, from) => {
    if(to.name != 'login' && !localStorage.getItem("kiwix")){
        Router.push({name: 'login'})
        return false
    }
    return true
})