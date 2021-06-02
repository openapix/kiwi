<template>
<div class="buttons mb-0">
    <button class="button is-link is-light is-small">创建命令</button>
    <button class="button is-danger is-light is-small">删除命令</button>
</div>

<table class="table is-hoverable is-striped is-fullwidth">
    <thead>
        <tr>
        <th><a>全选</a></th>  
        <th>名称</th>
        <th>IP</th>
        <th>状态</th>
        <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><input type="checkbox"></td>
        <td>dog-001</td>
        <td>192.168.6.1</td>
        <td><span class="tag is-success">运行</span></td>
        <td><a>测试</a> &nbsp; <a>删除</a></td>
        </tr>
        <tr>
        <td><input type="checkbox"></td>
        <td>dog-002</td>
        <td>192.168.6.2</td>
        <td><span class="tag is-warning">停止</span></td>
        <td><a>测试</a> &nbsp; <a>删除</a></td>
        </tr>
        <tr>
        <td><input type="checkbox"></td>
        <td>dog-003</td>
        <td>192.168.6.3</td>
        <td><span class="tag is-danger">异常</span></td>
        <td><a>测试</a> &nbsp; <a>删除</a></td>
        </tr>
        <tr>
        <td><input type="checkbox"></td>
        <td>dog-001</td>
        <td>192.168.6.1</td>
        <td><span class="tag is-success">运行</span></td>
        <td><a>测试</a> &nbsp; <a>删除</a></td>
        </tr>
        <tr>
        <td><input type="checkbox"></td>
        <td>dog-002</td>
        <td>192.168.6.2</td>
        <td><span class="tag is-warning">停止</span></td>
        <td><a>测试</a> &nbsp; <a>删除</a></td>
        </tr>
    </tbody>
</table>
</template>