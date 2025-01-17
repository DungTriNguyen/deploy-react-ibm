import { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
    `;
    const isConfirmed = window.confirm(
      `Please confirm your details:\n\n${confirmationMessage}`
    );
    if (isConfirmed) {
      console.log("Submitting feedback:", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
      });
      alert("Thank you for your valuable feedback!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
