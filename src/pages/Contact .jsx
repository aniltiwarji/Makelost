import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [error, setError] = useState("");

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "25px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "22px",
      color: "#333",
    },
    label: {
      display: "block",
      margin: "12px 0 6px",
      fontWeight: "600",
      color: "#444",
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      fontSize: "15px",
      marginBottom: "10px",
    },
    textarea: {
      width: "100%",
      minHeight: "100px",
      padding: "10px 12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      fontSize: "15px",
      resize: "vertical",
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#007bff",
      border: "none",
      borderRadius: "6px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
    },
    error: {
      fontSize: "13px",
      color: "red",
      marginTop: "4px",
    },
    captchaBox: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "15px 0",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      setError("Please confirm captcha");
      return;
    }
    alert("Form submitted!");
  };

  return (
    <div className="container">
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" placeholder="Enter your name" style={styles.input} />

        <label style={styles.label}>
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input type="email" placeholder="Enter your email" style={styles.input} />

        <label style={styles.label}>
          Message <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={200}
          placeholder="Write your message"
          style={styles.textarea}
        />
        <div style={{ fontSize: "13px", textAlign: "right", color: "#666" }}>
          {message.length}/200
        </div>

        <div style={styles.captchaBox}>
          <input
            type="checkbox"
            checked={captcha}
            onChange={() => setCaptcha(!captcha)}
          />
          <span>I'm not a robot</span>
        </div>
        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
