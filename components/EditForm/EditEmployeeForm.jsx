import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: " ",
    designation: "",
    gender: "",
    course1: false,
    course2: false,
    course3: false,
    file: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleChangeImg(e) {
    const file = e.target.files[0]; 
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) { 
      setFormData((prevFormData) => ({ 
        ...prevFormData,
        file: URL.createObjectURL(file) 
      }));
    } else {
      alert("Please upload a PNG or JPEG file."); 
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
}


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fName">Name</label>
      <input
        type="text"
       
        onChange={handleChange}
        name="name"
        value={formData.name}
        id="fName"
      />
      <label htmlFor="eAddress">Email </label>
      <input
        type="email"
       
        onChange={handleChange}
        name="email"
        value={formData.password}
        id="eAddress"
      />
      <label htmlFor="mNumber">Mobile No</label>
      <input
        type="number"
       
        onChange={handleChange}
        name="mobile"
        value={formData.password}
        id="mNumber"
      />
      <label htmlFor="edesignation">Designation</label>
      <select
        id="eDesignation"
        value={formData.favColor}
        onChange={handleChange}
        name="designation"
      >
        <option value="">-- Choose --</option>
        <option value="hr">HR</option>
        <option value="manager">Manager</option>
        <option value="sales">Sales</option>
      </select>

      
      <fieldset>
      <legend>Gender</legend>

      <input type="radio" id="male" name="gender"  value="Male"
                    onChange={handleChange}/>
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" name="gender"  value="Female"
                    onChange={handleChange}/>
      <label htmlFor="female">Female</label>
      </fieldset>

      <fieldset>
      <legend>Course</legend>
      <label htmlFor="isCourse">BSC</label>
      <input
        type="checkbox"
        id="isCourse"
        checked={formData.course}
        onChange={handleChange}
        name="course1"
      />
      <label htmlFor="isCourse2">MCA</label>
      <input
        type="checkbox"
        id="isCourse2"
        checked={formData.course}
        onChange={handleChange}
        name="course2"
      />
      <label htmlFor="isCourse3">BCA</label>

      <input
        type="checkbox"
        id="isCourse3"
        checked={formData.course}
        onChange={handleChange}
        name="course3"
      />
      </fieldset>
      <label htmlFor="ePhoto">Image</label> 
      <input type="file" onChange={handleChangeImg} accept=".png, .jpeg, .jpg" /> 
      {formData.file && <img src={formData.file} id="ePhoto" name="ePhoto" alt="Preview" />}
      <button>Submit</button>
    </form>
  );
}
