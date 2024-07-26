

import axios from "axios";

const BASE_URL="http://127.0.0.1:8000/api/employees/"

export async function ListEmployeeApi(){

    return await axios.get(BASE_URL)

}

export async function EmployeeCreateApi(data){

    return await axios.post(BASE_URL,data)

   

}

export async function EmployeeDetailApi(id){

    return await axios.get(BASE_URL+`${id}/`)
}

export async function EmployeeUpdateApi(id,data){

    return await axios.put(BASE_URL+`${id}/`,data)
}

export async function EmployeeDeleteApi(id){

    return await axios.delete(BASE_URL+`${id}/`)
}