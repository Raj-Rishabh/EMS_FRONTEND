import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CreateEmployeeForm.module.css";

export default function EForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobileNo: " ",
    designation: "",
    gender: "",
    MCA: false,
    BCA: false,
    BSC: false,
    imgUpload: null,
  });

  React.useEffect(
    function () {
      if (id) {
        fetch(`https://ems-backend-xj9t.onrender.com/employees/${id}`)
          .then((res) => res.json())
          .then((data) =>
            setFormData({
              ...data,
              MCA: data.course.includes("MCA"),
              BCA: data.course.includes("BCA"),
              BSC: data.course.includes("BSC"),
            })
          );
      }
    },
    [id]
  );

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const fileToDataUri = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      console.log("here?");
      setFormData((prevFormData) => ({
        ...prevFormData,
        imgUpload: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  function handleChangeImg(e) {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      fileToDataUri(file);
    } else {
      alert("Please upload a PNG or JPEG file.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const courses = [
      formData.BCA && "BCA",
      formData.MCA && "MCA",
      formData.BSC && "BSC",
    ].filter(Boolean);


    const responseasdasd = {
      ...formData,
      course: courses,
    };
    const url = id
      ? `https://ems-backend-xj9t.onrender.com/employees/${id}`
      : "https://ems-backend-xj9t.onrender.com/employees";
    fetch(url, {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseasdasd),
    })
    .then(res =>  res.status !== 400 ? navigate("/employeeList" ) : res.json())
    .then(data => alert(data.error));
  };

  return (
    <div className={styles.bgSmall}>
      <form
        onSubmit={handleSubmit}
        autocomplete="one-time-code"
        className={styles.empForm}
      >
        <label htmlFor="fName" className={styles.label}>Name</label>
        <input
          type="text"
          autocomplete="one-time-code"
          onChange={handleChange}
          name="name"
          value={formData.name}
          id="fName"
          className={styles.input}
        />
        <label htmlFor="eAddress" className={styles.label}>Email </label>
        <input
          type="email"
          autocomplete="one-time-code"
          onChange={handleChange}
          name="email"
          value={formData.email}
          id="eAddress"
          className={styles.input}
        />
        <label htmlFor="mNumber" className={styles.label}>Mobile No</label>
        <input
          type="number"
          autocomplete="one-time-code"
          onChange={handleChange}
          name="mobileNo"
          value={formData.mobileNo}
          id="mNumber"
          className={styles.input}
        />
        <label htmlFor="edesignation" className={styles.label}>Designation</label>
        <select
          id="eDesignation"
          value={formData.designation}
          onChange={handleChange}
          name="designation"
          className={styles.input}
        >
          <option value="">-- Choose --</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>

        <fieldset className={styles.gender}>
          <legend className={styles.label}>Gender</legend>

          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </fieldset>

        <fieldset className={styles.course}>
          <legend className={styles.label}>Course</legend>
          <label htmlFor="isCourse">BSC</label>
          <input
            type="checkbox"
            id="isCourse"
            checked={formData.BSC}
            onChange={handleChange}
            name="BSC"
          />
          <label htmlFor="isCourse2">MCA</label>
          <input
            type="checkbox"
            id="isCourse2"
            checked={formData.MCA}
            onChange={handleChange}
            name="MCA"
          />
          <label htmlFor="isCourse3">BCA</label>

          <input
            type="checkbox"
            id="isCourse3"
            checked={formData.BCA}
            onChange={handleChange}
            name="BCA"
          />
        </fieldset>
        <label className={styles.imgLabel} htmlFor="ePhoto">Image</label>
        <input
          type="file"
          onChange={handleChangeImg}
          accept=".png, .jpeg, .jpg"
      
          
        />
        {formData.imgUpload && (
          <img
            src={formData.imgUpload}
            id="ePhoto"
            name="imgUpload"
            alt="Preview"
            className={styles.image}
          />
        )}
        <button className={styles.btn} onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
