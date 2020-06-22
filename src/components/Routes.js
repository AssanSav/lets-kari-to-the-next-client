import React from "react"
import { Switch, Route } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import MyProfile from "./MyProfile"
import MyMatches from "./MyMatches"
import MyMatchProfile from "./MyMatchProfile"
import EditProfile from "./EditProfile"
import CreateMessage from "./CreateMessage"
import ReceivedMessages from "./ReceivedMessages"
import SentMessages from "./SentMessages"
import UsersContainer from '../containers/UsersContainer';
import UploadPhoto from "./UploadPhoto"


const Routes = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login  />
        </Route>

        <Route exact path="/signup" render={(routerProps) =>
          <Signup routerProps={routerProps} />}>
        </Route>

        <Route exact path="/login" render={(routerProps) => 
          <Login history={routerProps.history} />}>
        </Route>

        <Route exact path="/edit-profile/:id" render={(routerProps) =>
          <EditProfile routerProps={routerProps} />}>
        </Route>

        <Route exact path="/upload-photos/:id" render={(routerProps) =>
          <UploadPhoto routerProps={routerProps} />}>
        </Route>

        <Route exact path="/my-profile/:id" render={(routerProps) =>
          <MyProfile history={routerProps.history} />}>
        </Route>

        <Route exact path="/matches" render={(routerProps) =>
          <MyMatches history={routerProps} />}>
        </Route>

        <Route exact path="/match-profile/:id" render={(routerProps) =>
          <MyMatchProfile routerProps={routerProps} />}>
        </Route>

        <Route exact path="/match-new-message/:id" render={(routerProps) =>
          <CreateMessage routerProps={routerProps} />}>
        </Route>

        <Route exact path="/sent-messages" render={(routerProps) =>
          <SentMessages routerProps={routerProps} />}>
        </Route>

        <Route exact path="/received-messages" render={(routerProps) =>
          <ReceivedMessages routerProps={routerProps} />}>
        </Route>

        <Route exact path="/users" render={(routerProps) =>
          <UsersContainer routerProps={routerProps} />}>
        </Route>
        
      </Switch>
    </div>
  )
}


export default Routes

