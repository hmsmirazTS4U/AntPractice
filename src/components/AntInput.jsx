import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
function AntInput() {
  return (
    <div>
      <Input
        placeholder="Name"
        maxLength={20}
        addonBefore={<UserOutlined />}
        // prefix={<UserOutlined />}
        // addonAfter={<UserOutlined />}
        // suffix={<UserOutlined />}
        allowClear
        // disabled
        style={{ width: "400px", marginTop: "5px" }}
      ></Input>
    </div>
  );
}

export default AntInput;
