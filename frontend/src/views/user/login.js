import React from "react";
import { Button, Form, Input } from "antd";
import { useLanguage,useUser_ } from "../../context/context";
import { Link,useNavigate } from "react-router-dom";

import api from '../../http/api';

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  const navigate = useNavigate()
  const language = useLanguage();
  const User_ = useUser_();
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const res = await api.login(values);
      if(res.code === 0){
        User_.login(res.data);
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="mx-auto w-3/12 h-[500px] mt-10">
      <h1 className="text-center text-2xl font-bold">{language["login.title"]}</h1>
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
            label={language["login.username"]}
            name="email"
            rules={[
              {
                required: true,
                message: language["login.username.message"],
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={language["login.password"]}
            name="password"
            rules={[
              {
                required: true,
                message: language["login.password.message"],
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" className="bg-basic">
              {language["login.submit"]}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Link to="/register" className="text-sm">
            {language["login.goRegister"]}
        </Link>
    </div>
  );
};
export default Login;
