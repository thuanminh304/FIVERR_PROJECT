import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

export default function PageNotFound() {
    const history=useHistory()
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi , trang này không tồn tại"
        extra={<Button onClick={()=>{
            history.goBack()
        }} type="primary">Quay lại</Button>}
      />
      ,
    </div>
  );
}
