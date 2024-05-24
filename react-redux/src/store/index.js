import {createStore} from "redux";

const reducerFn = (state = {counter:120, name:"Jenipher", title:"Learning React"}, action)=>{
    return state;
}

const store= createStore(reducerFn);
export default store;