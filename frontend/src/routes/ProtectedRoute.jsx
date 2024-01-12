import {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

const ProtectedRoute = ({children,  allowedRoles }) => {
    const {token, role} = useContext(authContext)

    const isAllowed = allowedRoles.includes(role)

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute