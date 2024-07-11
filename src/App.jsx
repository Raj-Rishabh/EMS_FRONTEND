import React from 'react'
import Form from '../components/Login/LoginForm'
import EForm from '../components/EmployeeForm/CreateEmployeeForm'
import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import NavBar from '../components/NavBar/NavBar'
import EmployeeList from '../components/EmployeeList/EmployeeList'
import SignupForm from '../components/SignupPage/SignUp'

function App() {
  const { pathname } = useLocation();
  const showNav = !['/signUp', '/'].includes(pathname);
  return (
    <div>
      { showNav && <NavBar/> }
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/employeeList" element={<EmployeeList />}/>
        <Route path="/employee/" element={<EForm/>}/>
        <Route path="/employee/:id" element={<EForm/>}/>
        <Route path="/" element={<Form/>}/>
        <Route path="/signUp" element={<SignupForm/>}/>
      </Routes>
    </div>
  )
}

export default App
