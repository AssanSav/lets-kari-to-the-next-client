import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ChatRoomForm = ({ handleSubmit, handleChange, content }) => {
  return (
    <>
      <form className="input" onSubmit={handleSubmit}>
        <textarea
          name="content"
          value={content}
          type="text"
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default ChatRoomForm;
