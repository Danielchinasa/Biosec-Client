import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Logs = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://127.0.0.1:8000/api/system-logs')
      setLogs(request.data)
      return request
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className='container my-4'>
        <h2>System Logs</h2>

        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Log Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Subject (Affected Table)</th>
              {/* <th scope='col'>Properties</th> */}
              <th scope='col'>Created At</th>
            </tr>
          </thead>
          {logs &&
            logs
              .slice(0)
              .reverse()
              .map((log) => {
                let str = log.subject_type
                str = str.slice(4)
                return (
                  <tbody>
                    <tr key={log.id}>
                      <th scope='row'>{log.id}</th>
                      <td>{log.log_name}</td>
                      <td>{log.description}</td>
                      <td>
                        <code>
                          {str} {}Table
                        </code>
                      </td>
                      {/* <td>{log.properties}</td> */}
                      <td>{log.created_at}</td>
                    </tr>
                  </tbody>
                )
              })}
        </table>
      </div>
    </div>
  )
}

export default Logs
