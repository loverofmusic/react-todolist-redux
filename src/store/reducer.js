import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'
const defaultState = {
  inputValue: "默认",
  list: ["1","2"]
};
// reducer 可以接受state，但是绝不能修改state
// reducer必须是纯函数，给定固定输入， 必须有固定输出，（不能写生成日期，定时器，ajax那些），而且不能有副作用
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); 
    newState.list.push(newState.inputValue);
    newState.inputValue = ''
    return newState;
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); 
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
};
