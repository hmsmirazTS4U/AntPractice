import { Alert, Button, Form, Input } from "antd";
import { useState } from "react";

function AntForm() {
  const [showAlert, setShowAlert] = useState(false);
  const onFinish = (e) => {
    console.log(e);
    setTimeout(() => {
      setShowAlert(true);
      // message.success("Login Success");
    }, 1000);
  };
  return (
    <div
      style={{
        marginTop: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showAlert && (
        <Alert type="error" message="Error" description="Error in login" closable />
      )}
      <Form onFinish={onFinish}>
        <Form.Item label="User Name" name="username">
          <Input
            placeholder="User Name"
            required
            style={{ width: "300px" }}
          ></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password
            placeholder="Password"
            required
            style={{ width: "310px" }}
          ></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "380px" }}
            type="primary"
            htmlType="submit"
            block
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AntForm;
