import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setAll } from '../redux/reducers/data'
import UserList from './userList'
import '../assets/scss/main.scss'

const Home = () => {
  const users = useSelector((s) => s.data.users)
  const selectUser = useSelector((s) => s.data.selected)
  const dispatch = useDispatch()
  const [allChecked, setAllChecked] = useState(false)
  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div className="w-full h-screen">
      <h1 className="text-center text-6xl font-bold my-5"><span className="text-teal-500">React</span>+<span className="text-purple-900">Redux  </span><span className="text-teal-500">Pro</span><span className="text-purple-900">ject</span></h1>
      <div className="w-full flex text-xl font-bold border-t-4 border-b-4 border-purple-900 bg-purple-900 bg-opacity-50 p-4">
        <table className="w-3/6 text-teal-300">
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allChecked}
                onChange={(e) => {
                  setAllChecked(e.target.checked)
                  dispatch(setAll(e.target.checked))
                }}
              />
            </th>
            <th>Name</th>
            <th>Surname</th>
            <th>E-mail</th>
          </tr>
          {users.map((user) => (
            <UserList key={user} user={user} allChecked={allChecked} />
          ))}
        </table>
        <div className="w-3/6 text-teal-200 ">
          <h2 className="mb-10">Users:</h2>
          {selectUser.map((el, i, arr) => (
            <span className="ml-2" key={el.first_name}>{el.first_name + (i !== (arr.length - 1) ? ',' : '.')}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
