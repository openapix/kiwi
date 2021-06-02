<template>
<div class="buttons mb-0">
    <button @click="open" class="button is-link is-light is-small">创建服务器</button>
    <button class="button is-info is-light is-small">创建分组</button>
</div>

<h5>分组</h5>
<div class="srv-wrap mb-1">
    <div class="box group">
        <span>Group-ai(16)</span>
    </div>
    <div class="box group">
        <span>Group-fish(16)</span>
    </div>
    <div class="box group">
        <span>Group-snake(16)</span>
    </div>
</div>

<h5>服务器(37)</h5>

<div class="srv-wrap">
    <div class="box srv" @mouseover="showClose" @mouseleave="hideClose">
        <span>yss-1</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        <button class="delete is-pulled-right" :class="{'is-hidden': isHidden}" @click="delSrv"></button>

        <progress class="progress is-small prog is-primary" value="85" max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>

    <div class="box srv">
        <span>yss-2</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        
        <progress class="progress is-small prog is-primary" value="90" max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>

    <div class="box srv">
        <span>yss-3</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        
        <progress class="progress is-small prog is-primary " max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>

    <div class="box srv">
        <span>yss-4</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        
        <progress class="progress is-small prog is-primary " max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>
    <div class="box srv">
        <span>yss-1</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        
        <progress class="progress is-small prog is-primary " max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>

    <div class="box srv">
        <span>yss-2</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        
        <progress class="progress is-small prog is-primary " max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>

    <div class="box srv">
        <span>yss-3</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        
        <progress class="progress is-small prog is-primary " max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>

    <div class="box srv">
        <span>yss-4</span>
        <span class="tags">
            <span class="tag is-link is-light">fish</span>
            <span class="tag is-info is-light">SSD:68%</span>
            <span class="tag is-info is-light">HDD:50%</span>
        </span>
        
        <progress class="progress is-small prog is-primary " max="100">20%</progress>
        <progress class="progress is-small prog is-link" value="25" max="100">25%</progress>
        <progress class="progress is-small prog is-info" value="50" max="100">50%</progress>
        <progress class="progress is-small prog" value="75" max="100">75%</progress>
    </div>
</div>

<div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">创建服务器</p>
            <button class="delete" aria-label="close" @click="close"></button>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">名称</label>
                <div class="control">
                    <input class="input" type="text" maxlength="24" placeholder="请输入名称" v-model="srv.name">
                </div>
            </div>
            <div class="field">
                <label class="label">地址</label>
                <div class="control">
                    <input class="input" type="text" maxlength="64" placeholder="请输入地址" v-model="srv.addr">
                </div>
            </div>
            <div class="field">
                <label class="label">密码</label>
                <div class="control">
                    <input class="input" type="text" maxlength="64" placeholder="请输入密码" v-model="srv.secret">
                </div>
            </div>
            <div class="field">
                <label class="label">密钥</label>
                <div class="control select" style="width: 100%;">
                    <select style="width: 100%;" v-model="srv.key">
                        <option>选择密钥</option>
                        <option>id_rsa_2048</option>
                        <option>alikey.pem</option>
                        <option>chia-azure_key.pem</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label class="label">分组</label>
                <div class="control select" style="width: 100%;">
                    <select style="width: 100%;" v-model="srv.group">
                        <option>选择分组</option>
                        <option>fish</option>
                        <option>snake</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label class="label">标签</label>
                <div class="control">
                    <input class="input" type="text" maxlength="64" placeholder="请输入标签" v-model="srv.tag">
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button @click="save" class="button is-success is-fullwidth">保存</button>
        </footer>
    </div>
</div>

</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const isHidden = ref(true);

        const srv = {
            name: '',
            addr: '',
            secret: '',
            key: '',
            group: '',
            tag: ''
        }
        const isActive = ref(false);

        const open = () => {
            isActive.value = true
        }
        const close = () => {
            isActive.value = false
        }

        const save = () => {
            console.log(srv)
        }

        const showClose = () => {
            console.log('showClose')
            isHidden.value = false
        }
        const hideClose = () => {
            console.log('hideClose')
            isHidden.value = true
        }

        const delSrv = () => {
            confirm('Are you sure?');
        }

        return {isActive, open, close, srv, save, isHidden, showClose, hideClose, delSrv}
    },
}
</script>

<style scoped>
.srv {
    width: 18rem;
    height: 10rem;
    padding: 0.5rem;
    cursor: pointer;
}
.group {
    width: 10rem;
    height: 2.5rem;
    padding: 0.5rem;
    cursor: pointer;
}
.prog {
    margin-bottom: 0.5rem;
}
.tags {display: inline;}

.srv-wrap {display: flex; flex-wrap: wrap;}

</style>