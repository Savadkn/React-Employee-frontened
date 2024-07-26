import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import EmployeeCreate from '../Components/EmployeeCreate'
import EmployeeSummary from '../Components/EmployeeSummary'

function Index() {

  const [refreshRequired,SetRefreshrequired]=useState()

  const[EmployeeId,SetemployeeId]=useState()
  

  return (
    <div>
      <Navbar></Navbar>
     
     <EmployeeCreate SetRefreshrequired={SetRefreshrequired} EmployeeId={EmployeeId}></EmployeeCreate>
     {/* <h1 className='text-center'>Employees List</h1> */}
      <EmployeeSummary refreshRequired={refreshRequired} SetemployeeId={SetemployeeId} ></EmployeeSummary>
      
    </div>
  )
}

export default Index
