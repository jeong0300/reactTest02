import { Input, Button, notification } from "antd";
import { useFormik } from "formik";
import "../css/FormContainer.css";

const FormContainer = (props) => {
  const { setInputValue } = props;
  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },

    onSubmit: (values, { resetForm }) => {
      const userData = localStorage.getItem("formInput");

      let newData = userData ? JSON.parse(userData) : [];

      const keyData = {
        ...values,
        key: Date.now(),
      };

      newData.push(keyData);

      setInputValue(newData);

      localStorage.setItem("formInput", JSON.stringify(newData));

      notification.warning({
        message: "등록되었습니다.",
      });

      resetForm();
    },
  });

  return (
    <div className="formContainer">
      <form className="formBox" onSubmit={userFormik.handleSubmit}>
        <Input
          name="name"
          placeholder="이름을 입력해 주세요."
          value={userFormik.values.name}
          onChange={userFormik.handleChange}
          required
        />
        <Input
          name="age"
          type="number"
          placeholder="나이를 입력해 주세요."
          value={userFormik.values.age}
          onChange={userFormik.handleChange}
          required
        />
        <Input
          name="nickName"
          placeholder="별명을 입력해 주세요."
          value={userFormik.values.nickName}
          onChange={userFormik.handleChange}
          required
        />
        <Input
          name="hobby"
          placeholder="취미를 입력해 주세요."
          value={userFormik.values.hobby}
          onChange={userFormik.handleChange}
          required
        />
        <Button htmlType="submit">저장</Button>
      </form>
    </div>
  );
};

export default FormContainer;
