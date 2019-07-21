import Element from 'main/index.js';
import { post, get } from './ajax';

const { version } = Element;

const hostList = {
  local: 'http://localhost:3008/',
<<<<<<< HEAD
  alpha: 'https://ssr.alpha.elenet.me/element-theme-server/',
  production: 'https://ssr.ele.me/element-theme-server/'
=======
  alpha: 'https://element-api.ar.elenet.me/element/theme/',
  production: 'https://element-api.ele.me/element/theme/'
>>>>>>> 测是
};

const host = hostList[process.env.FAAS_ENV] || hostList.production;

export const getVars = () => {
  return get(`${host}getVariable?version=${version}`);
};

export const getTestEle = () => {
<<<<<<< HEAD
  return get(`${hostList.alpha}getVariable?version=${version}`);
=======
  return get(`${hostList.alpha}getVariable`);
};

export const getTestAli = () => {
  return get(`https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/VmvVUItLdPNqKlNGuRHi.png?t=${Date.now()}`);
>>>>>>> 测是
};

export const updateVars = (data, cb) => {
  return post(`${host}updateVariable?version=${version}`, data, cb);
};
