import { lazy } from 'react';
const Home = lazy(() => import('../views/home/index'));


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


]

export default List;