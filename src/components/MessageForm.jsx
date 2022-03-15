import React, { useState } from "react";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

function MessageForm(props) {
  const [value, setValue] = useState("");

  // sendMessage need this two variable
  const { chatId, creds } = props;

  // Handle input text value change
  const handleChange = (e) => {
    setValue(e.target.value);

    isTyping(props, chatId);
  };

  // Handle upload image
  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
}

export default MessageForm;
