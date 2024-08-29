import { Button, Upload } from "antd";

const DragFileUpload = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Upload.Dragger
        multiple
        listType="picture"
        action={"http://localhost:5173/"}
      >
        <Button>Click Upload</Button>
      </Upload.Dragger>
    </div>
  );
};

export default DragFileUpload;
