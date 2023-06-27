import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Select, Space, Modal } from "antd";
const AddModal = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    props.onAdd({
      name,
      phone,
    });
    props.onClose();

    

  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleCancel = () => {
    props.onClose();
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={true}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
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
            labelAlign={"left"}
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input onChange={nameHandler} />
          </Form.Item>
          <Form.Item
            labelAlign={"left"}
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: false, message: "Please input your phone number!" },
              {
                pattern: /^[6-9]\d{9}$/,
                message: "invalid phone number",
              },
            ]}
          >
            <Input onChange={phoneHandler} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddModal;
