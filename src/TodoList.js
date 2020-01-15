import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnChange = this.handleBtnChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div
        style={{
          marginTop: "10px",
          marginLeft: "10px"
        }}
      >
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="Basic usage"
            style={{
              width: "300px",
              marginRight: "10px"
            }}
            onChange={this.handleInputChange}
          ></Input>
          <Button type="primary" onClick={this.handleBtnChange}>
            {" "}
            提交{" "}
          </Button>
        </div>
        <List
          style={{
            width: "300px",
            marginTop: "10px"
          }}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnChange(){
    const action = {
      type: "add_todo_item"
    };
    store.dispatch(action);
  }
}