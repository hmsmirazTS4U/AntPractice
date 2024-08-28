import { useState } from "react";
import { Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import "./../styles/btn.css";

const AntButton = () => {
  const [loading, setLoading] = useState(false);
  const onButtonClick = () => {
    console.log("clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <Button
        type="primary"
        className="btn"
        loading={loading}
        // block
        icon={<StopOutlined />}
        onClick={onButtonClick}
      >
        PRESS ME
      </Button>
    </div>
  );
};

export default AntButton;
