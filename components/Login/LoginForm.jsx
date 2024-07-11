import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css";

export default function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState(
        {userName: "", password: ""}
    )
    

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSucess(name){
        localStorage.setItem('FullName', name); 
        navigate("/dashboard" )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://ems-backend-xj9t.onrender.com/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({...formData }), 
        }).then(res => {
            if (res.ok) {
                return res.json(); 
            } else {
                throw new Error('Invalid Username/Password'); 
            }
        })
        .then(data => {
            const { name } = data; 
            handleSucess(name); 
        })
        .catch(error => {
            alert(error.message); 
        });
    };
           
    return (
        <div className={styles.bg}>
        <div className={styles.bgSmall}>
          <h1>EMS</h1>
          <h4>Login to Continue</h4>
        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
        <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                onChange={handleChange}
                name="userName"
                className={styles.input}
                value={formData.userName}
            />
            </div>
            <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                onChange={handleChange}
                name="password"
                className={styles.input}
                value={formData.password}
            />
            </div>

            <button className={styles.btn} type="submit">Login</button>
        </form>

        <p className={styles.foot} onClick={()=>navigate('/signUp')}>SignUp [New User]</p>
        </div>
        </div>
        
    )
}
