import { Select } from "antd";

function AntSelect() {
  const sports = ["Football", "Cricket", "Badminton", "Soccer","Swim"];
  return (
    <div>
      <p>What is favorite sports?</p>
      <Select
        placeholder="Select Sports"
        allowClear
        mode="multiple"
       // maxTagCount={2}
        maxCount={2}
        style={{ width: "400px" }}
      >
        {sports.map((sport, index) => {
          return (
            <Select.Option key={index} value={sport}>
              {sport}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
}

export default AntSelect;
