import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import pic from "../../src/assets/profile.svg"

export default function NavBar() {

    const navigate = useNavigate();

    const name = localStorage.getItem('FullName');
  return (
      <div className={styles.nav}>
        <img src={pic} alt="img" />
        <h3 className={styles.navC} onClick={() => navigate('/dashboard')}>Home</h3>
        <h3 className={styles.navC} onClick={() => navigate('/employeeList')}>Employee List</h3>
        <h3 className={styles.name}>{name}</h3>
        <h3 className={styles.navC} onClick={() => navigate('/')}>Logout</h3>
      </div>
    
  );
}
