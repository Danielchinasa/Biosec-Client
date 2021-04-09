import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const [employees, setEmployees] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')

  // fetching  All Employee data from api
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://127.0.0.1:8000/api/employee-list')
      setEmployees(request.data)
      return request
    }
    fetchData()
  }, [])

  let handleMyArchive

  return (
    <div>
      <div className='container my-4'>
        <h2 className='float-left'>Employee List</h2>

        <Link to='employee/create' style={{ color: '#fff' }}>
          <button class='btn btn-success float-right' type='button'>
            <i class='fas fa-user-plus'></i> {''}
            New Employee
          </button>
        </Link>
        <div
          class='modal fade'
          id='exampleModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Enter Employee Detail
                </h5>
                <button
                  type='button'
                  class='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div class='modal-body'>
                <form>
                  <div class='form-group'>
                    <label for='recipient-name' class='col-form-label'>
                      Full Name:
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='recipient-name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class='form-group'>
                    <label for='recipient-name' class='col-form-label'>
                      Email:
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='recipient-name'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class='form-group'>
                    <label for='recipient-name' class='col-form-label'>
                      Department:
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='recipient-name'
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </div>
                  <div class='modal-footer'>
                    <button
                      type='button'
                      class='btn btn-secondary'
                      data-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='submit' class='btn btn-success'>
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Full Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Employee Id</th>
              <th scope='col'>Department</th>
              <th scope='col'>Status</th>
              <th scope='col'>Action</th>
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
                      <td>
                        <form
                          onSubmit={
                            (handleMyArchive = () => {
                              axios
                                .get(
                                  'http://127.0.0.1:8000/api/employee/' +
                                    employee.id +
                                    '/archive'
                                )
                                .then(
                                  (response) => {
                                    console.log(response)
                                  },
                                  (error) => {
                                    console.log(error)
                                  }
                                )
                            })
                          }
                          action='/'
                        >
                          <Link
                            to={{
                              pathname: `/employee/${employee.id}`,
                              updateProps: employee.id,
                            }}
                          >
                            <i
                              class='fas fa-user-edit'
                              style={{ color: '#28A745' }}
                            ></i>
                          </Link>{' '}
                          <button
                            type='submit'
                            style={{ backgroundColor: name, border: '0px' }}
                          >
                            <i
                              class='fas fa-archive'
                              style={{ color: '#6C757D' }}
                            ></i>
                          </button>
                        </form>
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

export default Homepage
