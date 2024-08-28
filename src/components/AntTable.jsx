import { Table, Tag } from "antd";

function AntTable() {
  const data = [
    {
      name: "Alice Smith",
      age: 10,
      address: "123 Elm Street",
      key: "1",
    },
    {
      name: "David Johnson",
      age: 12,
      address: "456 Maple Avenue",
      key: "2",
    },
    {
      name: "Emma Brown",
      age: 15,
      address: "789 Oak Lane",
      key: "3",
    },
    {
      name: "Michael Lee",
      age: 11,
      address: "101 Pine Road",
      key: "4",
    },
    {
      name: "Sophia Clark",
      age: 14,
      address: "202 Cedar Boulevard",
      key: "5",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Kids",
      dataIndex: "kids",
      key: "kids",
      render: (_, text) => (
        <Tag color={text.age > 12 ? "green" : "red"}>{text.age}</Tag>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
}

export default AntTable;
