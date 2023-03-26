import React from "react";

export default function Contacts() {
  return (
    <div className="contacts">
      <label for="user_name">Enter Your Name:</label>
      <label for="user_email">Enter Your Email:</label>

      <br />
      <input
        type="text"
        name="user_name"
        id="user_name"
        placeholder="Enter Your Name..."
      />
      <input
        type="text"
        name="user_email"
        id="user_email"
        placeholder="Enter Your Email..."
      />
      <br />

      <label>Enter Your messsage:</label>
      <br />
      <textarea placeholder="Enter Your messsage..." />
      <br />

      <button className="btn">
        <a>send</a>
      </button>
    </div>
  );
}
