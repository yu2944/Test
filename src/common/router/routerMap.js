import Login from "../login/login-2";
import Index from "../../container/index";
import Error from "../../component/error";

//主路由
export default [
    { path: '/', name: 'Login', component:Login },
    { path: '/login', name: 'Login', component:Login },
    { path: '/404', name: 'Error', component:Error },
    { path: '/index', name: 'Index', component:Index, auth: true },
]