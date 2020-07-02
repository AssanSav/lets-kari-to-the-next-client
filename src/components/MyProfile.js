import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import {deleteUser} from "../actions/deleteUser"


const MyProfile = (props) => {

    const removeUser = () => {
        props.deleteUser(props.user)
            .then(() => {
                props.history.push("/signup")
        })
    }
  
    if (!props.user )  {
        return <div></div>
    }
  else {
        const {id, age, image, username, city, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = props.user
    
      return (
          <div className="my-profile">
            <div className="avatar_flip">
                <img className="profile_pic" src={image} alt=""/> 
            </div>
            <h2>
              <strong>{username}</strong>
            </h2>
            <Link to={`/upload-photos/${id}`}>
                Upload Picture
            </Link>
            <h2>Bio</h2>
            <p className="bio">
            {bio}
            </p>
            <table className="table">
                <tbody>
                    <tr>
                    <td>City: {city}</td>
                    <td>Age: {age} </td>
                    </tr>
                    <tr>
                    <td>Gender: {gender} </td>
                    <td>Orientation: {orientation}</td>
                    </tr>
                    <tr>
                    <td>Relationship: {relationship}</td>
                    <td>Children: {children}</td>
                    </tr>
                    <tr>
                    <td>Height: {height}</td>
                    <td>Body Shape: {body_shape}</td>
                    </tr>
                    <tr>
                    <td>Ethnicity: {ethnicity}</td>
                    <td>Education: {education}</td>
                    </tr>
                </tbody> 
            </table>
            <h3><strong>Interested In:</strong></h3>
            <h2>
            {props.interests.map(int => <span key={int.id}>{int.name}&nbsp; </span>)} 
            </h2> 
            <div>
            <Button variant="outline-success" href={`/edit-profile/${props.user.id}`} >
                    Edit Profile
            </Button>
            </div> 
          <Button variant="danger" onClick={() => { if (window.confirm('Are you sure you wish to delete your account?')) removeUser() }} style={{marginTop: "10px"}}>
                Delete Account
            </Button>
        </div>
    )
  }
}



const mapStateToProps = ({ usersReducer, interestsReducer }) => {
    return {
        user: usersReducer.user,
        interests: interestsReducer.interests
    }
}

export default connect(mapStateToProps, {deleteUser})(MyProfile)