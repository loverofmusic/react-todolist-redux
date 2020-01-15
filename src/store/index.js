import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);//创建一个管理员的时候要把小本子给他
export default store;
