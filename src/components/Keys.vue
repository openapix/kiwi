<template>
<div class="buttons mb-0">
    <button class="button is-link is-light is-small" @click="open">创建密钥</button>
    <button class="button is-danger is-light is-small">删除密钥</button>
</div>

<table class="table is-hoverable is-striped is-fullwidth">
  <thead>
    <tr>
      <th><a>全选</a></th>  
      <th>名称</th>
      <th>公钥</th>
      <th>私钥</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox"></td>
      <td>id_rsa_2048.pub</td>
      <td><i class="far fa-copy"></i> ssh-rsa AAAAB3NzaC1yc2EAAAADAQAAAAB3NzaC1yc2EAAAADAQ...</td>
      <td><i class="far fa-copy"></i> ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEApRZeySv4XjFjhuLaJv...</td>
      <td><a @click="open">查看</a> &nbsp; <a>删除</a></td>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td>chia-azure_key_pub</td>
      <td><i class="far fa-copy"></i> ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEApRZeySv4XjFjhuLaJv...</td>
      <td><i class="far fa-copy"></i> ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEApRZeySv4XjFjhuLaJv...</td>
      <td><a @click="open">查看</a> &nbsp; <a>删除</a></td>
    </tr>
  </tbody>
</table>

<div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">创建密钥</p>
            <button class="delete" aria-label="close" @click="close"></button>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">名称</label>
                <div class="control">
                    <input class="input" type="text" maxlength="24" placeholder="请输入名称" v-model="key.name">
                </div>
            </div>
            <div class="field">
                <label class="label">公钥</label>
                <div class="control">
                    <textarea class="textarea" placeholder="请输入公钥" v-model="key.pub"></textarea>
                </div>
            </div>
            <div class="field">
                <label class="label">私钥</label>
                <div class="control">
                    <textarea class="textarea" placeholder="请输入私钥" v-model="key.pri"></textarea>
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
        const key = {
            name: '',
            pub: '',
            pri: '',
        }
        const isActive = ref(false);

        const open = () => {
            isActive.value = true
        }
        const close = () => {
            isActive.value = false
        }

        const save = () => {
            console.log(key)
        }

        return {isActive, open, close, key, save}
    },
}
</script>