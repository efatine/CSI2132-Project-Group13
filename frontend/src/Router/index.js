import { lazy } from 'react';
const Home = lazy(() => import('../views/home/index'));
const Login = lazy(() => import("../views/user/login.js"));
const Register = lazy(() => import("../views/user/register.js"));


const List = [
    {
        path:'/',
        children:[],
        auth:false,
        params:{},
        element:<Home/>,
        meta:{
            key:'',
            word:''
        }
    },
    {
        path: "/login",
        children: [],
        auth: true,
        params: {},
        element: <Login />,
        meta: {
          key: "login",
          word: "login",
        },
      },
      {
        path: "/register",
        children: [],
        auth: true,
        params: {},
        element: <Register />,
        meta: {
          key: "signUp",
          word: "signUP",
        },
      },


]

export default List;