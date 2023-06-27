import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Select, Space, Modal } from "antd";
import AddModal from "./AddModal";

const initialData = [
  {
    value: "Ashish Shrimali",
    label: "Ashish Shrimali",
  },
  {
    value: "Gaurav",
    label: "Gaurav",
  },
];
const Users = () => {
  const [users, setUsers] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const submitHandler = (user) => {
    setUsers((prev) => {
      return [
        {
          value: user.name,
          label: user.name,
        },
        ...prev,
      ];
    });
  };

  return (
    <div>
      {isModalOpen && <AddModal onAdd={submitHandler} onClose={handleCancel} />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="PAN NUMBER"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Add Users"
          name="user"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Space wrap>
            <Select
              defaultValue="lucy"
              style={{ width: 200 }}
              onChange={handleChange}
            >
              <Select.Option value="china" label="China">
                <Space>
                  <Button
                    style={{ width: 160 }}
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    Add User
                  </Button>
                </Space>
              </Select.Option>
              {users.map((user) => {
                return <Select.Option value={user.value} label={user.label} />;
              })}
            </Select>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Users;
