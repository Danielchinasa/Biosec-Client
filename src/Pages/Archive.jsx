import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Archive = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        'http://127.0.0.1:8000/api/employee-archive-list'
      )
      setEmployees(request.data)
      return request
    }
    fetchData()
  }, [employees])

  return (
    <div>
      <div className='container my-4'>
        <h2>Employee Archive List</h2>

        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Full Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Employee Id</th>
              <th scope='col'>Department</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          {employees &&
            employees
              .slice(0)
              .reverse()
              .map((employee) => {
                return (
                  <tbody>
                    <tr key={employee.id}>
                      <th scope='row'>{employee.id}</th>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>
                        <code>{employee.employee_id}</code>
                      </td>
                      <td>{employee.department}</td>
                      <td>
                        {employee.status === 1 ? (
                          <span class='badge badge-success'>Active</span>
                        ) : (
                          <span class='badge badge-secondary'>Archived</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                )
              })}
        </table>
      </div>
    </div>
  )
}

export default Archive
