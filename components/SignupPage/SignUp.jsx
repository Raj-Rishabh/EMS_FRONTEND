import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";

export default function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    userName: "",
    password: "",
    name: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ems-backend-xj9t.onrender.com/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    }).then(res => {
      if (res.ok) {
          return res.json(); 
      } else {
          throw new Error('Invalid Username/Password'); 
      }
  })
  .catch(error => {
      alert(error.message); 
  });
};
   

  return (
    <div className={styles.bg}>
      <div className={styles.bgSmall}>
        <h1>EMS</h1>
        <h4>SignUp to Continue</h4>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={formData.name}
              className={styles.input}
              id="fullname"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              onChange={handleChange}
              name="userName"
              value={formData.userName}
              className={styles.input}
              id="username"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              className={styles.input}
              id="password"
            />
          </div>

          <button className={styles.btn} type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
