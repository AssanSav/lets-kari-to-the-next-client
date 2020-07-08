import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchMatches } from "../actions/fetchMatches"
import {  Button } from "react-bootstrap"
import {Link} from "react-router-dom"



class MyMatches extends Component {

    componentDidMount() {
        this.props.fetchMatches()
    }

  render() {
    if (!this.props.matches || this.props.matches.length === 0) {
      return <h4 style={{textAlign: "center"}}>Loading...</h4>
    }
    else {
      return (
        <>
          {this.props.matches.map(user => {
            return (
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
            )
          })
          }
        </>
      )
    }
  }
}

const mapStateToProps = ({ matchesReducer }) => {
  return {
      matches: matchesReducer.matches
  }
}

export default connect(mapStateToProps, {fetchMatches})(MyMatches)