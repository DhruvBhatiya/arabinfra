import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    subject: "",
    attachment: null,
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "attachment" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("mobile", formData.mobile);
    form.append("message", formData.message);
    form.append("subject", formData.subject);
    if (formData.attachment) {
      form.append("attachment", formData.attachment);
    }

    try {
      const response = await axios.post("http://localhost:5000/send-email", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponseMessage(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage(error.response?.data || "Failed to send email.");
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Attachment</label>
          <input
            type="file"
            name="attachment"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send Email</button>
      </form>

      <div>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
};

export default EmailForm;
