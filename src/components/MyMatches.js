import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchMatches } from "../actions/fetchMatches"
import { Link } from "react-router-dom"



class MyMatches extends Component {

  componentDidMount() {
    this.props.fetchMatches()
  }


  render() {
    return (
      <div >
        {this.props.matches.map(user => {
          return (
            <div key={user.id} className="profile_card">
              <div className="image_frame">
                <img id="image" src={user.image} alt={user.image}></img>
                <p>
                  <strong>{user.username}</strong>
                </p>
                <p>
                  <strong>Age:</strong> {user.age}
                </p>
                <p>
                  <strong>Orientation:</strong> {user.orientation}
                </p>
                <p>
                  <strong>Bio:</strong> {user.bio}
                </p>
                <Link  to={`/match-profile/${user.id}`}>
                  <button className="view-profile">
                    View
                  </button>
                </Link>
                </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ matchesReducer }) => {
    return {
        matches: matchesReducer.matches
    }
}

export default connect(mapStateToProps, {fetchMatches})(MyMatches)