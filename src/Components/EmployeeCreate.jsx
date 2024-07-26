import React, { useEffect, useState } from 'react'
import { EmployeeCreateApi, EmployeeDetailApi, EmployeeUpdateApi } from '../services/api'

function EmployeeCreate({SetRefreshrequired,EmployeeId}) {

  const [employee,SetEmployee]=useState({name:"",address:"",email:"",department:"",location:"",salary:""})

  useEffect(()=>{
    getEmployeeDetails(EmployeeId)

  },[EmployeeId])

async function getEmployeeDetails(EmployeeId){

    let res=await EmployeeDetailApi(EmployeeId)

    console.log(res.data);

    if(res.status>199 && res.status<300){

      SetEmployee(res.data);
    }
  }

  async function handleSubmit(event){

    event.preventDefault()

    if (EmployeeId){

        let res=await EmployeeUpdateApi(EmployeeId,employee)
       
        console.log(res);

        console.log("update");

        Reset()

        SetRefreshrequired(Math.random())

    }
    else{
      let res=await EmployeeCreateApi(employee)
    
      console.log(res);

      console.log("create");

      Reset()

      SetRefreshrequired(Math.random())
      
    }

    function Reset(){

      SetEmployee({name:"",address:"",email:"",department:"",location:"",salary:""})
    }

    

    
    
  }
  return (
    <div>
      <h1 className='text-center'>Employees</h1>
      <div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 border border-3 rounded shadow p-4">
            {EmployeeId? <h3 className='text-center my-2'>Edit new movie</h3> :<h3 className='text-center my-2'>Add New  Employee </h3>}
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Employee name</label>
                  <input 
                  type="text" 
                  value={employee.name}
                  className='form-control' 
                  onChange={(e)=>SetEmployee({...employee,name:e.target.value})}
                  />
                </div>

                <div className='w-50'>
                  <label  htmlFor="">Address</label>
                  <input
                   type="text" 
                   value={employee.address}
                   className='form-control ' 
                   onChange={(e)=>SetEmployee({...employee,address:e.target.value})}
                   />
                </div>
              </div>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Email</label>
                  <input 
                  type="text" 
                  value={employee.email}
                  className='form-control'
                  onChange={(e)=>SetEmployee({...employee,email:e.target.value})}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Department</label>
                  <input
                   type="text"
                   value={employee.department}
                    className='form-control'
                    onChange={(e)=>SetEmployee({...employee,department:e.target.value})}
                    />
                </div>
              </div>
              <div className="mb-3  d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Location</label>
                  <input
                   type="text"
                   value={employee.location}
                    className='form-control'
                    onChange={(e)=>SetEmployee({...employee,location:e.target.value})}
                    />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Salary</label>
                  <input 
                  type='number'
                  value={employee.salary}
                   className='form-control'
                    onChange={(e)=>SetEmployee({...employee,salary:e.target.value})}
                    />
                </div>
              </div>
              <div className="mb-3">
                {EmployeeId?<button type='submit'>Edit</button>: <button type='submit'>Add</button>}
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>


    </div>
    </div>
  )
}

export default EmployeeCreate
