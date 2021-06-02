<template>
<div style="width:44rem;">
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">汇率</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" type="number" placeholder="exchange rate" value="6.4">
        </p>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Plots</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" type="text" placeholder="plots count">
        </p>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">下载率</label>
    </div>
    <div class="field-body">
      <div class="field is-expanded">
        <div class="field has-addons">
          <p class="control is-expanded">
            <input class="input" type="number" min="0" value="45">
          </p>
          <p class="control">
            <a class="button is-static">
              %
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">钱包地址</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="xch1kn0chemye66ql9urww2k6rqmnjzt8e0s88je239v6l0pr604w8zqtdzxxx"></textarea>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-primary">
            Save Config
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>