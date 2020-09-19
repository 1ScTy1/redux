import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSelected } from '../redux/reducers/data'
import '../assets/scss/main.scss'


const UserList = ({ user, allChecked }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(allChecked)
  }, [allChecked])
  return (
    <tr key={user.id}>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked)
            dispatch(setSelected(e.target.checked, user))
          }}
        />
      </td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  )
}

export default UserList
