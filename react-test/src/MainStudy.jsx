import { Input, Button, Table, notification, message } from "antd";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const UserInfo = () => {
  // 불러온 데이터를 넣고 싶을 때
  const data = [
    {
      name1: "이름입니당",
      age: "뭘까여",
      nickName: "닉네임",
      hobby: "취미",
    },
    {
      name1: "이름",
      age: "뭘여",
      nickName: "gkkg",
      hobby: "졸려여",
    },
    {
      name1: "몰바",
      age: "몰바여",
      nickName: "모여",
      hobby: "모",
    },
    {
      name1: "sdfas",
      age: "cssfa",
      nickName: "모asfd여",
      hobby: "asdfa모",
    },
  ];

  const list = data.map((x, i) => {
    return {
      key: i,
      name: x.name1,
      age: x.age,
      nickName: x.nickName,
      hobby: x.hobby,
    };
  });

  // useEffect(() => {
  //   userFormik.setFieldValue("name", data.name);
  //   userFormik.setFieldValue("age", data.age);
  //   userFormik.setFieldValue("nickName", data.nickName);
  //   userFormik.setFieldValue("hobby", data.hobby);
  // }, [data]);

  // useEffect(() => {
  //   userFormik.setFieldValue("name", data.name);
  //   userFormik.setFieldValue("age", data.age);
  //   userFormik.setFieldValue("nickName", data.nickName);
  //   userFormik.setFieldValue("hobby", data.hobby);
  // }, []);

  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },
    // form의 버튼 눌렀을 때 실행
    // values : 위의 값들
    onSubmit: (values) => {
      notification.warning({
        message: "준비중",
      });
    },
  });

  // console.log(userFormik.values.name);

  const column = [
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
      render: (data) => {
        console.log(data, "data");
        return <Button onClick={() => {}}>삭제</Button>;
      },
    },
  ];

  return (
    <>
      <form onSubmit={userFormik.handleSubmit}>
        <Input
          name="name"
          placeholder="이름을 입력해 주세요."
          value={userFormik.values.name}
          onChange={userFormik.handleChange}
        />
        <Input
          name="age"
          placeholder="나이를 입력해 주세요."
          value={userFormik.values.age}
          onChange={userFormik.handleChange}
        />
        <Input
          name="nickName"
          placeholder="별명을 입력해 주세요."
          value={userFormik.values.nickName}
          onChange={userFormik.handleChange}
        />
        <Input
          name="hobby"
          placeholder="취미를 입력해 주세요."
          value={userFormik.values.hobby}
          onChange={userFormik.handleChange}
        />
        <Button htmlType="submit"> 저장 </Button>
      </form>
      <br />
      <Table columns={column} dataSource={list} />
    </>
  );
};

export default UserInfo;
