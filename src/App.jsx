import React from 'react'
import Form from '../components/Login/LoginForm'
import EForm from '../components/EmployeeForm/CreateEmployeeForm'
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import NavBar from '../components/NavBar/NavBar'
import EmployeeList from '../components/EmployeeList/EmployeeList'
import SignupForm from '../components/SignupPage/SignUp'

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  const { pathname } = useLocation();
  const showNav = !['/signUp', '/'].includes(pathname);
  const isAuthenticated = !!localStorage.getItem('FullName');
  
  return (
    <div>
      {showNav && <NavBar/>}
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/signUp" element={<SignupForm/>}/>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/employeeList" element={<EmployeeList/>}/>
          <Route path="/employee" element={<EForm/>}/>
          <Route path="/employee/:id" element={<EForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
