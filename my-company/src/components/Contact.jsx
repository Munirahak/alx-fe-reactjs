import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            border: "1px solid green",
            borderRadius: "5px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            border: "1px solid green",
            borderRadius: "5px",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            border: "1px solid green",
            borderRadius: "5px",
            height: "50px",
          }}
        />
        <button type="submit" style={{ width: "100%" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
