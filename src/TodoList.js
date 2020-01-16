// 容器组件，主要负责数据逻辑
import React, { Component } from "react";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList
  // initListAction
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnChange = this.handleBtnChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnChange={this.handleBtnChange}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      ></TodoListUI>
    );
  }

  componentDidMount(){
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnChange() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
