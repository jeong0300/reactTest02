import { Button, Select, Table } from "antd";
import { useState } from "react";
import "../css/TableContainer.css";

const TableContainer = (props) => {
  const { inputValue, setInputValue } = props;

  // 삭제하기
  const handleDelete = (key) => {
    const updatedList = inputValue.filter((val) => val.key !== key);
    setInputValue(updatedList);
    localStorage.setItem("formInput", JSON.stringify(updatedList));
  };

  // th 배경색
  const [back, setBack] = useState("plum");

  const option = [
    { value: "plum", label: "보라색" },
    { value: "skyblue", label: "파란색" },
    { value: "pink", label: "분홍색" },
  ];

  // th
  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "나이",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "별명",
      dataIndex: "nickName",
      key: "nickName",
    },
    {
      title: "취미",
      dataIndex: "hobby",
      key: "hobby",
    },
    {
      title: "관리",
      render: (_, data) => (
        <Button onClick={() => handleDelete(data.key)}>삭제</Button>
      ),
    },
  ];

  return (
    <>
      <div className="tableContainer">
        <Select
          defaultValue={back}
          style={{ width: 120 }}
          onChange={(value) => setBack(value)}
        >
          {option.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
        <Table
          columns={columns}
          dataSource={inputValue}
          components={{
            header: {
              cell: (props) => {
                return <th {...props} style={{ backgroundColor: back }} />;
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default TableContainer;
