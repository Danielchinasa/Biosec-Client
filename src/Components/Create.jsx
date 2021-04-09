import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Create = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')

  const [details, setDetils] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios
      .post('http://127.0.0.1:8000/api/employee-create', {
        name: name,
        email: email,
        department: department,
      })
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
    props.history.push('/')
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} action='/'>
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
          <button type='button' class='btn btn-secondary' data-dismiss='modal'>
            Close
          </button>
          <button type='submit' class='btn btn-success'>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create
