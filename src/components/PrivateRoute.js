import React from "react"
import { Route, Redirect } from "react-router-dom"
import {connect} from "react-redux"


const PrivateRoute = ({ status, ...props }) => {
  return status  ? <Route {...props} /> : <Redirect to='/' />
}


const mapStatetoProps = ({ usersReducer }) => {
  return {
    status: usersReducer.status
  }
}
export default connect(mapStatetoProps, null)(PrivateRoute)