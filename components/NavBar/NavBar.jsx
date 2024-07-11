import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {

    const navigate = useNavigate();

    const name = localStorage.getItem('FullName');
  return (
      <div className={styles.nav}>
        <img src="/src/assets/profile.svg" alt="img" />
        <h3 className={styles.navC} onClick={() => navigate('/dashboard')}>Home</h3>
        <h3 className={styles.navC} onClick={() => navigate('/employeeList')}>Employee List</h3>
        <h3 className={styles.name}>{name}</h3>
        <h3 className={styles.navC} onClick={() => navigate('/login')}>Logout</h3>
      </div>
    
  );
}
