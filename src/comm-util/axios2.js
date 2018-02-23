import axios from "axios";
require("es6-promise").polyfill();
import { ckGet } from "../comm-util";

const memberId = ckGet("munberId");
const keys = ckGet("keys");

axios.defaults.baseURL = "http://api.yishengya.cn";
let instance;
if (memberId && keys) {
  instance = axios.create({
    params: {
      memberId: memberId,
      keys: keys
    }
    // headers: {
    //     post: { "Content-Type": "application/x-www-form-urlencoded" },
    //     //'Authorization_Token': token,
    //     //Authorization_key: key
    // }
  });
} else {
  instance = axios.create();
}
export default instance;

export function arrIsNull(arr) {
  if(arr===null||arr===""){
    return true;
  }
  return arr.length === 0;
}
export function arrIsNoNull(arr) {
  if(!arr){
    return false;
  }
  return !arr.length === 0;
}
export function statusIsErr(status) {
  return !status;
}
export function statusIsNoErr(status) {
  return !status;
}
/*

 withCredentials: true,
 headers: {'X-Requested-With': 'XMLHttpRequest'},
 transformRequest: [data => {
 return querystring.stringify(data);
 }]
 例子
 ajax({
 method: 'post',
 url: '/user/12345',
 data: {
 firstName: 'Fred',
 lastName: 'Flintstone'
 }
 });

 ajax.get('/user')
 .then(res=>{
 log(res)
 })
 .catch((err)=>{
 log(err);
 })

 ajax.post('/user',{
 firstName:'Fred',
 lastName:'Flintstone'
 })
 .then(res=>{
 log(res)
 })
 .catch((err)=>{
 log(err);
 })
 */
