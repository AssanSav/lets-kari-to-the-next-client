import React, { Component } from "react"
import { Link } from "react-router-dom"


class UsersList extends Component {

render() {
        return (
            <div >
                {this.props.users.map(user => {
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
                        <Link to={`/match-profile/${user.id}`}>
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


export default UsersList