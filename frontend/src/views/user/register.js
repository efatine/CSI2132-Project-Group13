import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useLanguage } from "../../context/context";
import { Link } from "react-router-dom";
import api from "../../http/api";
const onFinish = async (values) => {
  console.log("Success:", values);
  try {
    const res = await api.register({ ...values, role: "user", hotel_id: 0 });
    if (res.code === 0) {
      // User_.login(res.data.authorization);
    }
  } catch (error) {
    console.log(error);
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Register = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const language = useLanguage();
  return (
    <div className="mx-auto w-3/12 h-[500px] mt-10">
      <h1 className="text-center text-2xl font-bold">
        {language["register.title"]}
      </h1>
      <div className="flex justify-center mt-4 mx-auto">
        <Form
          className="w-full"
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={language["register.username"]}
            name="email"
            rules={[
              {
                required: true,
                message:
                  language["register.username.message"],
              },
            ]}
          >
            <Input
              placeholder={
                language["register.username.message"]
              }
            />
          </Form.Item>

          <Form.Item
            label={language["register.name"]}
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              name="first_name"
              rules={[
                {
                  required: true,
                  message:
                    language["register.first_name.message"],
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
            >
              <Input
                placeholder={
                  language["register.first_name.message"]
                }
              />
            </Form.Item>
            <Form.Item
              name="last_name"
              rules={[
                {
                  required: true,
                  message:
                    language["register.last_name.message"],
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input
                placeholder={
                  language["register.last_name.message"]
                }
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label={language["register.password"]}
            name="password"
            rules={[
              {
                required: true,
                message:
                  language["register.password.message"],
              },
            ]}
          >
            <Input.Password
              placeholder={
                language["register.password.message"]
              }
            />
          </Form.Item>

          <Form.Item
            label={language["register.password"]}
            name="password"
            rules={[
              {
                required: true,
                message:
                  language["register.password.message"],
              },
            ]}
          >
            <Input.Password
              placeholder={
                language["register.password.message"]
              }
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" className="bg-basic">
              {language["register.submit"]}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Link to="/login" className="text-sm">
        {language["register.goLogin"]}
      </Link>
    </div>
  );
};
export default Register;
