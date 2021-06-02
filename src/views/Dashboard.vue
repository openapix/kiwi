<template>
<nav class="navbar is-light mb-1" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item">
            <router-link to="/dashboard"><img src="../assets/logo.png" width="28" height="28"></router-link>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                <i class="fas fa-bars"></i>
            </a>
            <a class="navbar-item" @click="refresh"><i class="fas fa-sync"></i></a>
            <span class="navbar-item">
                <router-link to="/calc" style="color:#4a4a4a;"><i class="fas fa-calculator"></i> 计算器</router-link>
            </span>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a @click="logout" class="button is-light"><i class="fas fa-user-secret"></i>&nbsp;Log out</a>
                </div>
            </div>
        </div>
    </div>
</nav>

<div class="columns">
    <div class="column is-1" style="min-width:140px;">
        <aside class="menu">
            <ul class="menu-list">
                <li><router-link to="/dashboard"><i class="fas fa-tachometer-alt"></i> 仪表盘</router-link></li>
            </ul>
            <ul class="menu-list">
                <li>
                    <router-link to="servers"><i class="fas fa-server"></i> 服务器</router-link>
                    <ul>
                        <li><router-link to="keys"><i class="fas fa-key"></i> 密钥</router-link></li>
                    </ul>
                </li>
                <li><router-link to="commands"><i class="fas fa-list"></i> 命令列表</router-link></li>
                <li><router-link to="accounts"><i class="fas fa-dollar-sign"></i> 帐号管理</router-link></li>
                <li><router-link to="settings"><i class="fas fa-cog"></i> 设置</router-link></li>
            </ul>
        </aside>
    </div>

    <div class="column">
        <router-view />
    </div>
</div>
</template>

<script>
import storage from 'sweet-storage'

export default {
    setup() {
        const logout = () => {
            localStorage.removeItem("kiwix")
            location.href = '/'
        }
        
        const refresh = () => {
            storage.remove('netspace')
            storage.remove('xchTibDay')
            storage.remove('netBalance')
            storage.remove('grossBalance')
            storage.remove('xchPrice')
            location.reload()
        }

        return {logout, refresh}
    },
}
</script>

