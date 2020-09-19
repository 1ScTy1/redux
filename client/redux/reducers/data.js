import axios from 'axios'

const initialState = {
  users: [],
  selected: []
}

const SET_USER = 'SET_USER'
const SELECT_USER = 'SELECT_USER'
const SELECT_ALL = 'SELECT_ALL'

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, users: action.users }
    case SELECT_USER:
      if (action.status) {
        return { ...state, selected: [...state.selected, action.user] }
      }
      return { ...state, selected: [...state.selected.filter((el) => el.id !== action.user.id)] }
    case SELECT_ALL:
      if (action.status) {
        return { ...state, selected: [...state.users] }
      }
      return { ...state, selected: [] }
    default:
      return state
  }
}
export const getUser = () => {
  return (dispatch) => {
    axios(`/api/v1/users`).then(({ data: users }) => dispatch({ type: SET_USER, users }))
  }
}

export const setSelected = (status, user) => {
  return { type: SELECT_USER, status, user }
}
export const setAll = (status) => {
  return { type: SELECT_ALL, status }
}