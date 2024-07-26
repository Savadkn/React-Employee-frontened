import React, { useEffect, useState } from 'react'
import EmployeeCreate from './EmployeeCreate'
import { EmployeeDeleteApi, ListEmployeeApi } from '../services/api'

function EmployeeSummary({refreshRequired,SetemployeeId}) {

  const [employee,setEmployee]=useState()
  
 async function HandleEmployeedelete(id){

    let res= await EmployeeDeleteApi(id)

    if (res.status>199 && res.status<300){

      getAllEmployees()
    }
  }

  async function getAllEmployees(){

   

    let res=await ListEmployeeApi()

    if (res.status>199 &&res.status<300){

      setEmployee(res.data);

    }
    else{
      console.log("failed to fetch");
    }

   
  }

  useEffect(()=>{
    getAllEmployees()

  },[refreshRequired])

  return (
    <div>
     <div>
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                 
                    <table className='table table-stripped'>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>email</th>
                            <th>department</th>
                            <th>location</th>
                            <th>salary</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                          { employee && employee.map((m,i)=>(
                            <tr>
                              <td>{m.name}</td>
                              <td>{m.address}</td>
                              <td>{m.email}</td>
                              <td>{m.department}</td>
                              <td>{m.location}</td>
                              <td>{m.salary}</td>
                              <td><button className='btn btn-outline-danger' onClick={(()=>HandleEmployeedelete(m.id))}>Delete</button></td>
                              <td><button className='btn btn-warning' onClick={()=>SetemployeeId(m.id)}>Edit</button></td>
                            </tr>
                          ))}  
                        </tbody>
                    </table>
                </div>
                <div className="col-2"></div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default EmployeeSummary
