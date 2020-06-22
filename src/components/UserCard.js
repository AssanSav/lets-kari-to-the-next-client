import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const UserCard = ({user}) => {
  return (
      <>
          <div className="profile_short" key={`${user.id}`}>
              <div className="image-align">
                  <Link to={`/match-profile/${user.id}`}>
                      <img src={user.image} alt="" id="avatar_img" />
                  </Link>
                  <p>
                      <strong>
                          <Link to={`/match-profile/${user.id}`}>
                              {user.username}
                          </Link>
                      </strong>
                  </p>
                  <p>
                      <strong>Age:</strong>
                      {user.age}
                  </p>
                  <p>
                      <strong>Orientation:</strong>
                      {user.orientation}
                  </p>
                  <Link to={`/match-profile/${user.id}`}>
                      <Button variant="outline-success" >
                          View Profile
                                </Button>
                  </Link>
              </div>
          </div> 
     </>
  )
}


export default UserCard

