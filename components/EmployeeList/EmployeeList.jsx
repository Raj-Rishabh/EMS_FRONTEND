import React from "react";
import Employees from "../Employees/";
import { useNavigate } from "react-router-dom";
import styles from "./EmployeeList.module.css";



export default function EmployeeList() {
    const navigate = useNavigate();

    const [data, setData] = React.useState([])
    
        React.useEffect(function() {
          fetch("https://ems-backend-xj9t.onrender.com/employees/")
              .then(res => res.json())
              .then(data => setData(data))
      },[])


      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/employee');
    }
    return(
        <div >
            <div className={styles.bod}>
            <p className={styles.count}> Total Count : {data.length}</p>
            <button className={styles.btn} onClick={handleSubmit}>Create Employee</button>
            </div>
            <div className={styles.bod}>
                <p className={styles.count}>Search</p> :
                <input className={styles.inp}type="text" placeholder="Enter search Keyword" />
            </div>
            <Employees  data={data} />
        </div>


    )
}