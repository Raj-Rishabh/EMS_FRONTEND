import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Employees.module.css";


export default function Employees({ data }) {
  const navigate = useNavigate();

  const handleEdit = (_id) => {
    navigate(`/employee/${_id}`);
  };

  const handleDelete = (_id) => {
    fetch(`https://ems-backend-xj9t.onrender.com/employees/${_id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };
  return (
    <div className={styles.tableContainer}>
    <table className={styles.table}>
      <tr>
        <th>Unique -id</th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile No</th>
        <th>Designation</th>
        <th>Gender</th>
        <th>Course</th>
        <th>Create Date</th>
        <th>Action </th>
      </tr>

      {data.map((item) => {
        return (
          <tr>
            <td> {item._id}</td>
            <td>
              <img className={styles.image} src={item.imgUpload} />
            </td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td> {item.mobileNo}</td>
            <td>{item.designation}</td>
            <td>{item.gender}</td>
            <td>{item.course.join(",")}</td>
            <td>{item.createDate.slice(0, 10)}</td>
            <td >
              <div className={styles.btnB}>
              <button className={styles.btn} onClick={() => handleEdit(item._id)}>Edit</button>
              <button className={styles.btn}  onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </td>
          </tr>
        );
      })}
    </table>
    </div>
  );
}
