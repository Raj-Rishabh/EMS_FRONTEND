import React from "react";
import Employees from "../Employees/";
import { useNavigate } from "react-router-dom";
import styles from "./EmployeeList.module.css";

export default function EmployeeList() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [sortField, setSortField] = React.useState("");

  React.useEffect(
    function () {
      fetch(`https://ems-backend-xj9t.onrender.com/employees?search=${search}&field=${sortField}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    },
    [search, sortField]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/employee");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <div className={styles.bod}>
        <p className={styles.count}> Total Count : {data.length}</p>
        <button className={styles.btn} onClick={handleSubmit}>
          Create Employee
        </button>
      </div>
      <div className={styles.bod}>
        <p className={styles.count}>Search</p> :
        <form onSubmit={handleSearch}>
          <input
            value={searchTerm}
            onChange={handleChange}
            className={styles.inp}
            type="text"
            placeholder="Enter Keyword"
          />
          <button className={styles.btn}> Search</button>
        </form>
      </div>
      <Employees data={data} setSortField={setSortField}/>
    </div>
  );
}


"https://ems-backend-xj9t.onrender.com/employees/")
