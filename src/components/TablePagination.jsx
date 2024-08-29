import { Table } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
const TablePagination = () => {
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecords(1);
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Trips",
      dataIndex: "trips",
      key: "trips",
    },
  ];

  const fetchRecords = (page) => {
    setLoading(true);
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((res) => {
        setDataSource(res.data.data);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
          total: totalPages,
          onChange: (page) => {
            fetchRecords(page);
          },
        }}
      ></Table>
    </div>
  );
};

export default TablePagination;
