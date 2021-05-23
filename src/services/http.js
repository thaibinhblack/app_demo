import axios from 'axios';
import Vue from 'vue';

export const http = axios.create({
  baseURL: process.env.VUE_APP_URL_API
});

window.http = http;
Vue.prototype.$http = http;
