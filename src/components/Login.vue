<template>
<div class="content has-text-centered" style="margin-top: 10rem;">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h6>Log in to Kiwi</h6>
</div>

<form autocomplete="off" class="container box" style="width: 23rem;">
    <div class="field">
        <div class="control has-icons-left">
            <input class="input" type="text" placeholder="username" v-model="username">
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
        </div>
    </div>
    <div class="field">
        <div class="control has-icons-left">
            <input class="input" type="password" placeholder="password" autocomplete="new-password" v-model="password" @keydown.enter="login">
            <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
            </span>
        </div>
    </div>

    <div class="field">
        <div class="control">
            <button type="button" class="button is-link is-fullwidth" @click="login">Log in</button>
        </div>
    </div>
</form>

<footer class="footer">
    <div class="content has-text-centered">
    <p>
        <strong>Kiwi</strong> by <a href="https://github.com/lnzx">lnzx</a>. 
        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. 
        The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
    </div>
</footer>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const username = ref()
        const password = ref()
        
        const login = () => {
            if(!username.value  || !password.value || password.value.length < 8 || username.value != 'test'){
                console.log('username password null');
                return;
            }
            localStorage.setItem("kiwix", "000000000000")
            location.href = '/dashboard'
        }

        return {login, username, password}
    },
}
</script>

<style scoped>
.footer {
    padding: 2rem 1.5rem 2rem; 
    bottom: 0; 
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
}
</style>