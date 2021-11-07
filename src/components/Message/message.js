import { message } from "antd";
import "./message.scss";
const messageConfig = {
  loading() {
    return message.loading({
      content: "Loading...",
      key: "updatable",
      className: "custom-message",
    });
  },
  success() {
    return message.success({
      content: "Success !",
      key: "updatable",
      className: "custom-message",
      duration: 2,
    });
  },
  error() {
    return message.error({
      content: "Error !",
      key: "updatable",
      duration: 2,
      className: "custom-message",
    });
  },
  loadingToSuccess() {
    return message.loading("Redirecting to profile..", 2.5).then(() => {
      message.success("Success !", 2)
      window.history.back();
    });
  },
};

export default messageConfig;
