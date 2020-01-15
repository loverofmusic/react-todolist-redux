// 无状态组件，没有生命周期，只是一个函数，性能相对于其他组件要 高
import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const TodoListUI = props => {
  return (
    <div
      style={{
        marginTop: "10px",
        marginLeft: "10px"
      }}
    >
      <div>
        <Input
          value={props.inputValue}
          placeholder="Basic usage"
          style={{
            width: "300px",
            marginRight: "10px"
          }}
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleBtnChange}>
          提交
        </Button>
      </div>
      <List
        style={{
          width: "300px",
          marginTop: "10px"
        }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
export default TodoListUI;